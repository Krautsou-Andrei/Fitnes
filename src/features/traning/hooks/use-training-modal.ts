import { useRef, useState } from 'react';
import moment, { type Moment } from 'moment';

import { editTraningThunk } from '../model/edit-training';
import { addTraningThunk } from '../model/add-training';

import {
    selectCreateTraining,
    selectIsEdit,
    trainingActions,
    type TrainingName,
    type TrainingType,
    type Exercises,
} from '@entities/training';
import { selectIsLoadingn, selectIsLoadingnCalendar, sessionActions } from '@entities/session';

import { DateFormatConfig } from '@shared/config';
import { useAppDispatch, useAppMediaQuery, useAppSelector } from '@shared/hooks';
import { formatDate, isOldDate, showErrorForDevelop } from '@shared/lib';

type UseTrainingModalProps = {
    date: Moment;
    listTraining: TrainingName[];
    trainingsDay: TrainingType[];
};

export function useTainingModal({ date, listTraining, trainingsDay }: UseTrainingModalProps) {
    const createTraining = useAppSelector(selectCreateTraining);
    const isLoading = useAppSelector(selectIsLoadingn);
    const isLoadingCalendar = useAppSelector(selectIsLoadingnCalendar);
    const exercises = createTraining.exercises;
    const id = createTraining.id;
    const { isQueryXS } = useAppMediaQuery();
    const isEditTraining = useAppSelector(selectIsEdit);
    const dispatch = useAppDispatch();

    const [step, setStep] = useState(1);
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [selectTrainingName, setSelectTrainingName] = useState('');

    const timeoutRef = useRef<string | number | NodeJS.Timeout | undefined>(undefined);

    const currentDate = formatDate(date, DateFormatConfig.FORMAT_DD_MN_YYYY_DOT);
    const isOldDay = isOldDate(date);
    const isAllTraining = trainingsDay.length === listTraining.length;

    const remainTraining = listTraining.filter((training) => {
        if (isOldDay) {
            if (
                trainingsDay.some((item) => item.name === training.name && !item.isImplementation)
            ) {
                return training;
            }
        } else {
            if (!trainingsDay.some((item) => item.name === training.name)) {
                return training;
            }
        }
    });

    const nextStep = () => {
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
    };

    const onOpenDrawer = () => {
        if (!exercises.length) {
            dispatch(trainingActions.addDefaultExercises());
        }

        if (moment.isMoment(date)) {
            dispatch(trainingActions.setCreateTrainingDate(date.toISOString()));
        }

        setIsOpenDrawer((prev) => !prev);
    };

    const onCloseDrawer = () => {
        dispatch(trainingActions.clearExerciseEmptyName());
        setIsOpenDrawer((prev) => !prev);
    };

    const onSave = async () => {
        const startRequest = () => {
            dispatch(sessionActions.setIsLoadingCalendar(true));
            return new Promise((resolve, reject) => {
                timeoutRef.current = setTimeout(() => {
                    resolve(dispatch(editTraningThunk({ trainingId: id, body: createTraining })));
                }, 5000);
            });
        };

        try {
            if (isOldDay && isEditTraining) {
                await startRequest();
            } else if (isEditTraining) {
                await dispatch(editTraningThunk({ trainingId: id, body: createTraining }));
            } else {
                await dispatch(addTraningThunk(createTraining));
            }

            dispatch(trainingActions.clearCreateTraining());
            setStep(1);
        } catch (error) {
            showErrorForDevelop('Create training', error);
        }
    };

    const onCancelRequestEditTraning = () => {
        clearTimeout(timeoutRef.current);
        dispatch(sessionActions.setIsLoadingCalendar(false));
        setStep(1);
    };

    const selectOptions = remainTraining.map((item) => ({ value: item.name, label: item.name }));

    const onSelectTraining = (value: string) => {
        setSelectTrainingName(value);

        dispatch(trainingActions.clearCreateTraining());
        dispatch(trainingActions.setIsEdit(false));
        dispatch(trainingActions.setCreateTrainingName(value));
    };

    const onEditExercise = () => {
        if (isOldDate(date)) {
            dispatch(trainingActions.setIsImplementation(true));
        }
        onOpenDrawer();
    };

    const onEditTraining = (id: string, name: string, exercises: Exercises[]) => {
        dispatch(trainingActions.setCreateTrainingId(id));
        dispatch(trainingActions.setIsEdit(true));
        dispatch(trainingActions.setCreateTrainingExercises(exercises));
        dispatch(trainingActions.setCreateTrainingName(name));
        if (isOldDate(date)) {
            dispatch(trainingActions.setIsImplementation(true));
        }
        setSelectTrainingName(name);
        nextStep();
    };

    return {
        exercises,
        id,
        isAllTraining,
        isQueryXS,
        isLoading,
        isLoadingCalendar,
        isOldDay,
        isOpenDrawer,
        currentDate,
        createTraining,
        nextStep,
        onCancelRequestEditTraning,
        onCloseDrawer,
        onEditExercise,
        onEditTraining,
        onOpenDrawer,
        onSave,
        onSelectTraining,
        prevStep,
        selectOptions,
        selectTrainingName,
        step,
    };
}
