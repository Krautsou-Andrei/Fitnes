import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { trainingApi } from '../api/training-api';
import type { TrainingName, Exercises, CreateTraining, Training } from './types';

import type { RootState } from '@shared/types/store';

const defaultExercises = [
    {
        approaches: 1,
        name: '',
        replays: 1,
        weight: 0,
    },
];

type TrainingSliceType = {
    trainings: Training[];
    trainingName: TrainingName[];
    createTraining: CreateTraining;
};

const initialState: TrainingSliceType = {
    trainings: [],
    trainingName: [],
    createTraining: {
        name: '',
        date: '',
        exercises: [],
    },
};

export const trainingSlice = createSlice({
    name: 'trainings',
    initialState,
    reducers: {
        addDefaultExercises(state) {
            state.createTraining.exercises = defaultExercises;
        },
        setCreateTraining: (
            state: TrainingSliceType,
            { payload }: PayloadAction<CreateTraining>,
        ) => {
            state.createTraining = payload;
        },
        setCreateTrainingName: (state: TrainingSliceType, { payload }: PayloadAction<string>) => {
            state.createTraining.name = payload;
        },
        setCreateTrainingDate: (state: TrainingSliceType, { payload }: PayloadAction<string>) => {
            state.createTraining.date = payload;
        },
        setCreateTrainingExercise: (
            state: TrainingSliceType,
            { payload }: PayloadAction<{ partialExercises: Partial<Exercises>; index: number }>,
        ) => {
            state.createTraining.exercises[payload.index] = {
                ...state.createTraining.exercises[payload.index],
                ...payload.partialExercises,
            };
        },
        setTraning: (state: TrainingSliceType, { payload }: PayloadAction<Training[]>) => {
            state.trainings = payload;
        },
        setTraningName: (state: TrainingSliceType, { payload }: PayloadAction<TrainingName[]>) => {
            state.trainingName = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            trainingApi.endpoints.getTraining.matchFulfilled,
            (state: TrainingSliceType, { payload }: PayloadAction<Training[]>) => {
                state.trainings = payload;
            },
        );
        builder.addMatcher(
            trainingApi.endpoints.getTrainingList.matchFulfilled,
            (state: TrainingSliceType, { payload }: PayloadAction<TrainingName[]>) => {
                state.trainingName = payload;
            },
        );
    },
});

export const selectCreateTraining = (state: RootState) => state.trainings.createTraining;
export const selectTraining = (state: RootState) => state.trainings.trainings;
export const selectTrainingName = (state: RootState) => state.trainings.trainingName;

export const { actions: trainingActions } = trainingSlice;
