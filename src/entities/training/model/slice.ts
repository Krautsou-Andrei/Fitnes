import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { trainingApi } from '../api/training-api';
import type { TrainingType } from './types';

import type { RootState } from '@shared/types/store';

type TraningSliceType = {
    tranings: TrainingType[];
};

const initialState: TraningSliceType = {
    tranings: [],
};

export const traningSlice = createSlice({
    name: 'tranings',
    initialState,
    reducers: {
        setTraning: (state: TraningSliceType, { payload }: PayloadAction<TrainingType[]>) => {
            state.tranings = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            trainingApi.endpoints.getTraining.matchFulfilled,
            (state: TraningSliceType, { payload }: PayloadAction<TrainingType[]>) => {
                state.tranings = payload;
            },
        );
    },
});

export const selectTraning = (state: RootState) => state.tranings.tranings;

export const { actions: traningActions } = traningSlice;
