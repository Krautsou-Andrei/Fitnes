import { createAsyncThunk } from '@reduxjs/toolkit';

import { resultErrorFetch } from '../lib/resultErrorFetch';

import { sessionActions } from '@entities/session';
import { trainingApi } from '@entities/training';

import { isFetchBaseQueryError } from '@shared/api';
import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';

export const getTraningListThunk = createAsyncThunk<void, void, { state: RootState }>(
    EventApiConfig.TRANING_GET_LIST_NAME,

    async (_, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            await dispatch(trainingApi.endpoints.getTrainingList.initiate()).unwrap();
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                dispatch(resultErrorFetch(error, EventApiConfig.TRANING_GET_LIST_NAME));
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
