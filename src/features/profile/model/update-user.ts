import { createAsyncThunk } from '@reduxjs/toolkit';

import { resultErrorFetch } from '../lib';

import { RequestUserUpdateBody, User, profileApi } from '@entities/profile';
import { sessionActions } from '@entities/session';

import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';
import { isFetchBaseQueryError } from '@shared/api';

export const updateUserThunk = createAsyncThunk<
    User,
    Partial<RequestUserUpdateBody>,
    { state: RootState }
>(
    EventApiConfig.USER_UPDATE,

    async (body, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            const result = await dispatch(profileApi.endpoints.updateUser.initiate(body)).unwrap();
            return result;
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                dispatch(resultErrorFetch());
                dispatch(sessionActions.setIsError(true));
            }
            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
