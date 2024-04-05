import { createAsyncThunk } from '@reduxjs/toolkit';

import { resultErrorFetch } from '../lib/resultErrorFetch';

import { sessionActions } from '@entities/session';
import { Pal, trainingApi } from '@entities/training';

import { isFetchBaseQueryError } from '@shared/api';
import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';

export const getUserJointTrainingListThunk = createAsyncThunk<Pal[], void, { state: RootState }>(
    EventApiConfig.USER_JOINT_TRAINING_LIST,

    async (_, { dispatch, rejectWithValue }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            const result = await dispatch(
                trainingApi.endpoints.getUserJointTrainingList.initiate(),
            ).unwrap();
            return result;
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                dispatch(resultErrorFetch(error));
                return rejectWithValue(error);
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
