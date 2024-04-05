import { ChangeEvent, useState } from 'react';

import { ExercisesDefaultConfig } from '@features/traning/config';
import { selectIsEdit, selectPal, trainingActions } from '@entities/training';

import { useAppDispatch, useAppSelector } from '@shared/hooks';

type UseExerciseFormParams = {
    approachesDefault: number;
    checkedExersices: number[];
    exerciseNameDefault: string;
    indexExercise: number;
    replaysDefault: number;
    weightDefault: number;
};

export function useExerciseForm({
    approachesDefault,
    checkedExersices,
    exerciseNameDefault,
    indexExercise,
    replaysDefault,
    weightDefault,
}: UseExerciseFormParams) {
    const dispatch = useAppDispatch();
    const isEditTraining = useAppSelector(selectIsEdit);

    const [approaches, setApproaches] = useState<number>(
        approachesDefault || ExercisesDefaultConfig.APPROACHES,
    );
    const [exerciseName, setExerciseName] = useState<string>(
        exerciseNameDefault || ExercisesDefaultConfig.EXERCISE_NAME,
    );
    const [replays, setReplays] = useState<number>(
        replaysDefault || ExercisesDefaultConfig.REPLAYS,
    );
    const [weight, setWeight] = useState<number>(weightDefault || ExercisesDefaultConfig.WEIGHT);

    const isChecked = checkedExersices.includes(indexExercise);
    const isSelectPal = Boolean(useAppSelector(selectPal));

    const onChangeExerciseName = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setExerciseName(value);
        dispatch(
            trainingActions.setCreateTrainingExercise({
                partialExercises: { name: value },
                index: indexExercise,
            }),
        );
    };

    const onChangeApproaches = (value: number | null) => {
        if (value && value > 0) {
            setApproaches(value);
            dispatch(
                trainingActions.setCreateTrainingExercise({
                    partialExercises: { approaches: value },
                    index: indexExercise,
                }),
            );
        }
    };

    const onChangeWeight = (value: number | null) => {
        if (value !== null && value >= 0) {
            setWeight(value);
            dispatch(
                trainingActions.setCreateTrainingExercise({
                    partialExercises: { weight: value },
                    index: indexExercise,
                }),
            );
        }
    };

    const onChangeReplays = (value: number | null) => {
        if (value && value > 0) {
            setReplays(value);
            dispatch(
                trainingActions.setCreateTrainingExercise({
                    partialExercises: { replays: value },
                    index: indexExercise,
                }),
            );
        }
    };

    return {
        approaches,
        exerciseName,
        isChecked,
        isEditTraining,
        isSelectPal,
        onChangeApproaches,
        onChangeExerciseName,
        onChangeReplays,
        onChangeWeight,
        replays,
        weight,
    };
}
