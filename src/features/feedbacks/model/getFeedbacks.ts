import { createAsyncThunk } from '@reduxjs/toolkit';

import { sessionActions } from '@entities/session';
import { FeedbackType, feedbackApi } from '@entities/feedbacks';

import { isFetchBaseQueryError } from '@shared/api';
import { RootState } from '@shared/types/store';
import { EventApiConfig } from '@shared/config';

export const getFeedbacksThunk = createAsyncThunk<FeedbackType[], void, { state: RootState }>(
    EventApiConfig.FEEDBACKS,

    async (_, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            const result = await dispatch(feedbackApi.endpoints.getFeedback.initiate()).unwrap();
            return result;
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                console.log(error);
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
