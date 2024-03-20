import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, profileApi } from '@entities/profile';
import { sessionActions } from '@entities/session';

import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';

export const getUserThunk = createAsyncThunk<User, void, { state: RootState }>(
    EventApiConfig.TRAINING_GET,

    async (_, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            const result = await dispatch(profileApi.endpoints.getUser.initiate()).unwrap();
            return result;
        } catch (error: unknown | undefined) {
            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
