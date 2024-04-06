import { createAsyncThunk } from '@reduxjs/toolkit';

import { resultErrorFetch } from '../lib/resultErrorFetch';

import { sessionActions } from '@entities/session';
import { inviteApi, type Invite, type RequestInviteBody } from '@entities/invite';

import { isFetchBaseQueryError } from '@shared/api';
import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';

export const sendInvitieThunk = createAsyncThunk<Invite, RequestInviteBody, { state: RootState }>(
    EventApiConfig.INVATE_SEND,

    async (body, { dispatch, rejectWithValue }) => {
        dispatch(sessionActions.setIsLoadingCalendar(true));

        try {
            const result = await dispatch(inviteApi.endpoints.sendInvitie.initiate(body)).unwrap();
            return result;
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                dispatch(resultErrorFetch(error, EventApiConfig.INVATE_SEND));
                dispatch(sessionActions.setIsError(true));
                return rejectWithValue(error);
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoadingCalendar(false));
        }
    },
);
