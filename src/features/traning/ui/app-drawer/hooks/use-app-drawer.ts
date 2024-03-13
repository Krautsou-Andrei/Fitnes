import { useState } from 'react';
import { selectCreateTraining, selectIsEdit, trainingActions } from '@entities/training';
import { useAppDispatch, useAppSelector } from '@shared/hooks';

export function useAppDrawer() {
    const { exercises } = useAppSelector(selectCreateTraining);
    const isEdit = useAppSelector(selectIsEdit);
    const dispatch = useAppDispatch();

    const [checkedExersices, setCheckedExercises] = useState<number[]>([]);

    const addExercise = () => {
        dispatch(trainingActions.addDefaultExercises());
    };

    const onSetCheckedExercises = (indexExercise: number) => {
        if (checkedExersices.includes(indexExercise)) {
            setCheckedExercises(checkedExersices.filter((item) => item !== indexExercise));
            return;
        }

        setCheckedExercises([...checkedExersices, indexExercise]);
    };

    const deleteExercise = () => {
        const newExercises = exercises.filter(
            (_exersise, index: number) => !checkedExersices.includes(index),
        );

        dispatch(trainingActions.setCreateTrainingExercises(newExercises));
        setCheckedExercises([]);
    };

    return {
        addExercise,
        checkedExersices,
        deleteExercise,
        exercises,
        isEdit,
        onSetCheckedExercises,
    };
}
