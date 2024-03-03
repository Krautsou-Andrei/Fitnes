import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { feedbackApi } from '../api/feedback-api';
import type { FeedbackType } from './types';

import type { ResultModalType } from '@features/result-modal';

import type { RootState } from '@shared/types/store';

export type ResultModalSlice = {
    isOpen: boolean;
    typeModal?: ResultModalType;
};

type FeedbackSliceType = {
    feedbacks: FeedbackType[];
    resultModal: ResultModalSlice;
    isOpenModalNewFeedback: boolean;
};

const initialState: FeedbackSliceType = {
    feedbacks: [],
    resultModal: {
        isOpen: false,
        typeModal: undefined,
    },
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
        setResultModal: (
            state: FeedbackSliceType,
            { payload }: PayloadAction<ResultModalSlice>,
        ) => {
            state.resultModal.isOpen = payload.isOpen;
            state.resultModal.typeModal = payload.typeModal;
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
export const selectResultModal = (state: RootState) => state.feedback.resultModal;

export const { actions: feedbackActions } = feedbackSlice;
