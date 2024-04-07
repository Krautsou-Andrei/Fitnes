import { useEffect, useState } from 'react';
import { selectCreateTraining, selectIsEdit, selectPal, trainingActions } from '@entities/training';
import { useAppDispatch, useAppSelector } from '@shared/hooks';

export function useAppDrawer(isOpen: boolean) {
    const { exercises } = useAppSelector(selectCreateTraining);
    const selectPalforTraining = useAppSelector(selectPal);
    const isEdit = useAppSelector(selectIsEdit);
    const dispatch = useAppDispatch();

    const [checkedExersices, setCheckedExercises] = useState<number[]>([]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

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
        selectPalforTraining,
        onSetCheckedExercises,
    };
}
