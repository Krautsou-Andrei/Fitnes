import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { sessionActions } from '@entities/session';
import { feedbackApi } from '@entities/feedbacks';

import { isFetchBaseQueryError } from '@shared/api';
import { RootState } from '@shared/types/store';
import { EventApiConfig, PathConfig } from '@shared/config';

export const getFeedbacksThunk = createAsyncThunk<void, void, { state: RootState }>(
    EventApiConfig.FEEDBACKS,

    async (_, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            await dispatch(feedbackApi.endpoints.getFeedback.initiate()).unwrap();

            dispatch(push(PathConfig.FEEDBACKS));
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
