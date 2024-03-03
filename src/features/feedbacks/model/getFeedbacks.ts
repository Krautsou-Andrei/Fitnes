import { createAsyncThunk } from '@reduxjs/toolkit';

import { resultErrorFetch } from '../lib/resultErrorFetch';

import { sessionActions } from '@entities/session';
import { FeedbackType, feedbackApi } from '@entities/feedbacks';

import { isFetchBaseQueryError } from '@shared/api';
import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';

export const getFeedbacksThunk = createAsyncThunk<FeedbackType[], void, { state: RootState }>(
    EventApiConfig.FEEDBACKS_GET,

    async (_, { dispatch, rejectWithValue }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            const result = await dispatch(feedbackApi.endpoints.getFeedback.initiate()).unwrap();
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
