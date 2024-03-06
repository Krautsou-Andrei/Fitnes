import { createAsyncThunk } from '@reduxjs/toolkit';

import { resultErrorFetch } from '../lib/resultErrorFetch';

import { sessionActions } from '@entities/session';
import { TrainingType, trainingApi } from '@entities/training';

import { isFetchBaseQueryError } from '@shared/api';
import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';

export const getTraningThunk = createAsyncThunk<TrainingType[], void, { state: RootState }>(
    EventApiConfig.TRANING_GET,

    async (_, { dispatch, rejectWithValue }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            const result = await dispatch(trainingApi.endpoints.getTraining.initiate()).unwrap();
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
