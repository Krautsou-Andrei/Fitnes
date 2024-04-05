import { createAsyncThunk } from '@reduxjs/toolkit';

import { resultErrorFetch } from '../lib/resultErrorFetch';

import { sessionActions } from '@entities/session';
import { Pal, TrainingBestType, trainingApi } from '@entities/training';

import { isFetchBaseQueryError } from '@shared/api';
import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';

export const getUserJointTrainingListBestThunk = createAsyncThunk<
    Pal[],
    TrainingBestType,
    { state: RootState }
>(
    EventApiConfig.USER_JOINT_TRAINING_LIST_BEST,

    async (params, { dispatch, rejectWithValue }) => {
        dispatch(sessionActions.setIsLoading(true));
        console.log('params,', params);
        try {
            const result = await dispatch(
                trainingApi.endpoints.getUserJointTrainingListBest.initiate(params),
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
