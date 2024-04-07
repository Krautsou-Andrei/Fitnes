import { createAsyncThunk } from '@reduxjs/toolkit';

import { resultErrorFetch } from '../lib/resultErrorFetch';

import { sessionActions } from '@entities/session';
import { type RequestTrainingEditBody, type Training, trainingApi } from '@entities/training';

import { isFetchBaseQueryError } from '@shared/api';
import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';

export const editTraningThunk = createAsyncThunk<
    Training,
    RequestTrainingEditBody,
    { state: RootState }
>(
    EventApiConfig.TRAINING_EDIT,

    async (data, { dispatch, rejectWithValue }) => {
        dispatch(sessionActions.setIsLoadingCalendar(true));
              
        try {
            const result = await dispatch(
                trainingApi.endpoints.editTraining.initiate(data),
            ).unwrap();
            return result;
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                dispatch(resultErrorFetch(error, EventApiConfig.TRAINING_EDIT));
                dispatch(sessionActions.setIsError(true));
                return rejectWithValue(error);
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoadingCalendar(false));
        }
    },
);
