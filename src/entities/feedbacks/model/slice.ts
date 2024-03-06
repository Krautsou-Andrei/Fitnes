import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { feedbackApi } from '../api/feedback-api';
import type { FeedbackType } from './types';

import type { RootState } from '@shared/types/store';

type FeedbackSliceType = {
    feedbacks: FeedbackType[];
    isOpenModalNewFeedback: boolean;
};

const initialState: FeedbackSliceType = {
    feedbacks: [],
    isOpenModalNewFeedback: false,
};

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        setFeedbacks: (state: FeedbackSliceType, { payload }: PayloadAction<FeedbackType[]>) => {
            state.feedbacks = payload;
        },
        setIsOpenModalNewFeedback: (
            state: FeedbackSliceType,
            { payload }: PayloadAction<boolean>,
        ) => {
            state.isOpenModalNewFeedback = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            feedbackApi.endpoints.getFeedback.matchFulfilled,
            (state: FeedbackSliceType, { payload }: PayloadAction<FeedbackType[]>) => {
                state.feedbacks = payload;
            },
        );
    },
});

export const selectFeedbacks = (state: RootState) => state.feedback.feedbacks;
export const selectIsOpenModalNewFeedback = (state: RootState) =>
    state.feedback.isOpenModalNewFeedback;

export const { actions: feedbackActions } = feedbackSlice;
