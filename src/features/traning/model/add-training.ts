import { createAsyncThunk } from '@reduxjs/toolkit';

import { resultErrorFetch } from '../lib/resultErrorFetch';

import { sessionActions } from '@entities/session';
import { type RequestTrainingBody, type Training, trainingApi } from '@entities/training';

import { isFetchBaseQueryError } from '@shared/api';
import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';

export const addTraningThunk = createAsyncThunk<
    Training,
    RequestTrainingBody,
    { state: RootState }
>(
    EventApiConfig.TRAINING_ADD,

    async (data, { dispatch, rejectWithValue }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            const result = await dispatch(
                trainingApi.endpoints.addTraining.initiate(data),
            ).unwrap();
            return result;
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                dispatch(resultErrorFetch(error, EventApiConfig.TRAINING_ADD));
                return rejectWithValue(error);
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
