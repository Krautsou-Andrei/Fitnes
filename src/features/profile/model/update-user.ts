import { createAsyncThunk } from '@reduxjs/toolkit';

import { resultErrorFetch, resultSuccessFetch } from '../lib';

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
            dispatch(resultSuccessFetch());
            return result;
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                dispatch(resultErrorFetch());
            }
            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
