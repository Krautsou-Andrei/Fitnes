import { createAsyncThunk } from '@reduxjs/toolkit';

import { sessionActions } from '@entities/session';
import { RequesFeedbackBody, feedbackApi } from '@entities/feedbacks';

import { isFetchBaseQueryError } from '@shared/api';
import { RootState } from '@shared/types/store';
import { EventApiConfig } from '@shared/config';

export const AddFeedbackThunk = createAsyncThunk<void, RequesFeedbackBody, { state: RootState }>(
    EventApiConfig.FEEDBACK_ADD,

    async (body: RequesFeedbackBody, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            dispatch(feedbackApi.endpoints.addFeedback.initiate(body)).unwrap();
            
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
