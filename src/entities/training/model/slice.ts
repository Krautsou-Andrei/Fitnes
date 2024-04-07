import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { trainingApi } from '../api/training-api';
import type { TrainingName, Exercises, CreateTraining, Training, Parametrs, Pal } from './types';

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
    pals: Pal[];
    userJointTrainingList: Pal[];
    selectPal?: Pal;
    trainings: Training[];
    trainingName: TrainingName[];
    createTraining: CreateTraining;
};

const initialState: TrainingSliceType = {
    isEdit: false,
    pals: [],
    userJointTrainingList: [],
    selectPal: undefined,
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
        removeUserJointTraining(
            state: TrainingSliceType,
            { payload: { id } }: PayloadAction<{ id: string }>,
        ) {
            state.pals = state.pals.filter((pal) => pal.inviteId !== id);
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
        setCreateTrainingParametrs: (
            state: TrainingSliceType,
            { payload }: PayloadAction<Parametrs>,
        ) => {
            state.createTraining.parameters = Object.assign(
                {},
                state.createTraining.parameters,
                payload,
            );
        },
        setIsEdit: (state: TrainingSliceType, { payload }: PayloadAction<boolean>) => {
            state.isEdit = payload;
        },
        setIsImplementation: (state: TrainingSliceType, { payload }: PayloadAction<boolean>) => {
            state.createTraining.isImplementation = payload;
        },
        setSelectPal: (state: TrainingSliceType, { payload }: PayloadAction<Pal | undefined>) => {
            state.selectPal = payload;
        },
        setTraning: (state: TrainingSliceType, { payload }: PayloadAction<Training[]>) => {
            state.trainings = payload;
        },
        setTraningName: (state: TrainingSliceType, { payload }: PayloadAction<TrainingName[]>) => {
            state.trainingName = payload;
        },
        setUserJointTrainingStatus(
            state: TrainingSliceType,
            { payload: { id, status } }: PayloadAction<{ id: string; status: string }>,
        ) {
            state.userJointTrainingList = state.userJointTrainingList.map((user) =>
                user.id === id ? { ...user, status } : user,
            );
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
        builder.addMatcher(
            trainingApi.endpoints.getTrainingPals.matchFulfilled,
            (state: TrainingSliceType, { payload }: PayloadAction<Pal[]>) => {
                state.pals = payload;
            },
        );
        builder.addMatcher(
            trainingApi.endpoints.getUserJointTrainingList.matchFulfilled,
            (state: TrainingSliceType, { payload }: PayloadAction<Pal[]>) => {
                state.userJointTrainingList = payload;
            },
        );
        builder.addMatcher(
            trainingApi.endpoints.getUserJointTrainingListBest.matchFulfilled,
            (state: TrainingSliceType, { payload }: PayloadAction<Pal[]>) => {
                state.userJointTrainingList = payload;
            },
        );
    },
});

export const selectCreateTraining = (state: RootState) => state.trainings.createTraining;
export const selectIsEdit = (state: RootState) => state.trainings.isEdit;
export const selectPals = (state: RootState) => state.trainings.pals;
export const selectPal = (state: RootState) => state.trainings.selectPal;
export const selectTraining = (state: RootState) => state.trainings.trainings;
export const selectTrainingName = (state: RootState) => state.trainings.trainingName;
export const selectUsersJoint = (state: RootState) => state.trainings.userJointTrainingList;

export const { actions: trainingActions } = trainingSlice;
