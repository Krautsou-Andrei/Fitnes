import { createAsyncThunk } from '@reduxjs/toolkit';

import { resultErrorFetch } from '../lib/resultErrorFetch';

import { sessionActions } from '@entities/session';
import { inviteApi, type Invite, type RequestRejectSend } from '@entities/invite';

import { isFetchBaseQueryError } from '@shared/api';
import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';

export const rejectInvitieThunk = createAsyncThunk<Invite, RequestRejectSend, { state: RootState }>(
    EventApiConfig.INVITE_REJECT,

    async (id, { dispatch, rejectWithValue }) => {
        dispatch(sessionActions.setIsLoadingCalendar(true));

        try {
            const result = await dispatch(inviteApi.endpoints.rejectInvitie.initiate(id)).unwrap();
            return result;
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                dispatch(resultErrorFetch(error));
                return rejectWithValue(error);
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoadingCalendar(false));
        }
    },
);
