import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { trainingApi } from '../api/training-api';
import type { TrainingName, Exercises, CreateTraining, Training } from './types';

import type { RootState } from '@shared/types/store';

const defaultExercises = {
    approaches: 1,
    name: '',
    replays: 1,
    weight: 0,
};

const defaultCreateTraining = {
    id: '',
    name: '',
    date: '',
    isImplementation: false,
    exercises: [],
};

type TrainingSliceType = {
    isEdit: boolean;
    trainings: Training[];
    trainingName: TrainingName[];
    createTraining: CreateTraining;
};

const initialState: TrainingSliceType = {
    isEdit: false,
    trainings: [],
    trainingName: [],
    createTraining: defaultCreateTraining,
};

export const trainingSlice = createSlice({
    name: 'trainings',
    initialState,
    reducers: {
        addDefaultExercises(state) {
            state.createTraining.exercises.push(defaultExercises);
        },
        clearCreateTraining: (state: TrainingSliceType) => {
            state.createTraining = defaultCreateTraining;
        },
        clearExerciseEmptyName: (state: TrainingSliceType) => {
            state.createTraining.exercises = state.createTraining.exercises.filter(
                (exercise) => exercise.name !== '',
            );
        },
        setCreateTraining: (
            state: TrainingSliceType,
            { payload }: PayloadAction<CreateTraining>,
        ) => {
            state.createTraining = payload;
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
        setCreateTrainingExercises: (
            state: TrainingSliceType,
            { payload }: PayloadAction<Exercises[]>,
        ) => {
            state.createTraining.exercises = payload;
        },
        setCreateTrainingId: (state: TrainingSliceType, { payload }: PayloadAction<string>) => {
            state.createTraining.id = payload;
        },
        setCreateTrainingName: (state: TrainingSliceType, { payload }: PayloadAction<string>) => {
            state.createTraining.name = payload;
        },
        setIsEdit: (state: TrainingSliceType, { payload }: PayloadAction<boolean>) => {
            state.isEdit = payload;
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
export const selectIsEdit = (state: RootState) => state.trainings.isEdit;
export const selectTraining = (state: RootState) => state.trainings.trainings;
export const selectTrainingName = (state: RootState) => state.trainings.trainingName;

export const { actions: trainingActions } = trainingSlice;
