import { useState } from 'react';
import moment, { type Moment } from 'moment';

import { editTraningThunk } from '../model/edit-training';
import { addTraningThunk } from '../model/add-training';
import { resultSuccessFetch } from '../lib';
import { sendInvitieThunk } from '../model/send-invite';
import { StatusConfig } from '../config';

import { ModalTypeConfig } from '@features/result-modal/@ex/traning';

import {
    selectCreateTraining,
    selectIsEdit,
    trainingActions,
    type TrainingName,
    type TrainingType,
    type Exercises,
    useLazyGetTrainingQuery,
    Training,
    selectPal,
} from '@entities/training';
import { selectIsLoadingn, selectIsLoadingnCalendar } from '@entities/session';

import { DateFormatConfig } from '@shared/config';
import { useAppDispatch, useAppMediaQuery, useAppSelector, usePageIsEqual } from '@shared/hooks';
import { formatDate, isOldDate, showErrorForDevelop } from '@shared/lib';

type UseTrainingModalProps = {
    listTraining: TrainingName[];
    trainingsDay?: TrainingType[];
    date?: Moment;
};

export function useTainingModal({ date, listTraining, trainingsDay }: UseTrainingModalProps) {
    const dispatch = useAppDispatch();

    const [gettraining] = useLazyGetTrainingQuery();

    const { isTrainings } = usePageIsEqual();
    const { isQueryXS } = useAppMediaQuery();

    const createTraining = useAppSelector(selectCreateTraining);
    const isLoading = useAppSelector(selectIsLoadingn);
    const isLoadingCalendar = useAppSelector(selectIsLoadingnCalendar);
    const selectPalForTraining = useAppSelector(selectPal);
    const isEditTraining = useAppSelector(selectIsEdit);

    const [step, setStep] = useState(1);
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [isOpenEditWorkoutgModal, setIsOpenEditWorkoutgModal] = useState(false);
    const [selectTrainingName, setSelectTrainingName] = useState('');

    const exercises = createTraining.exercises;
    const id = createTraining.id;
    const currentDate = formatDate(date || '', DateFormatConfig.FORMAT_DD_MN_YYYY_DOT);
    const isOldDay = isOldDate(date);
    const isAllTraining = trainingsDay?.length === listTraining.length;
    const isButtonSaveDisabled = !(
        createTraining.date &&
        createTraining.name &&
        createTraining.exercises[0].name
    );

    const remainTraining = listTraining.filter((training) => {
        if (isOldDay) {
            if (
                trainingsDay?.some((item) => item.name === training.name && !item.isImplementation)
            ) {
                return training;
            }
        } else {
            if (!trainingsDay?.some((item) => item.name === training.name)) {
                return training;
            }
        }
    });

    const clearSelectTrainingName = () => {
        setSelectTrainingName('');
    };

    const nextStep = () => {
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
        clearSelectTrainingName();
    };

    const onOpenDrawer = () => {
        if (!exercises.length) {
            dispatch(trainingActions.addDefaultExercises());
        }

        if (moment.isMoment(date)) {
            dispatch(trainingActions.setCreateTrainingDate(date.toISOString()));
        }

        setIsOpenDrawer(true);
    };

    const onCloseDrawer = () => {
        dispatch(trainingActions.clearExerciseEmptyName());
        if (isTrainings) {
            dispatch(trainingActions.clearCreateTraining());
            dispatch(trainingActions.setSelectPal(undefined));
            setSelectTrainingName('');
        }
        dispatch(trainingActions.setIsEdit(false));
        setIsOpenDrawer(false);
    };

    const onSave = async () => {
        try {
            if (isEditTraining) {
                dispatch(editTraningThunk({ trainingId: id, body: createTraining }))
                    .unwrap()
                    .then(() => {
                        gettraining();

                        if (isTrainings) {
                            dispatch(resultSuccessFetch(ModalTypeConfig.SUCCESS_UPDATE_WORKOUT));
                        }
                    })
                    .catch((error) => showErrorForDevelop('Add training', error));
            } else {
                dispatch(addTraningThunk(createTraining))
                    .unwrap()
                    .then((result) => {
                        if (isTrainings) {
                            dispatch(resultSuccessFetch());
                        }

                        if (selectPalForTraining) {
                            const body = {
                                to: selectPalForTraining.id,
                                trainingId: result.training.id,
                            };
                            dispatch(sendInvitieThunk(body))
                                .unwrap()
                                .then(() => {
                                    dispatch(
                                        trainingActions.setUserJointTrainingStatus({
                                            id: body.to,
                                            status: StatusConfig.PENDING,
                                        }),
                                    );
                                });
                        }
                    })
                    .catch((error) => showErrorForDevelop('Add training', error));
            }

            dispatch(trainingActions.clearCreateTraining());
            setStep(1);
            clearSelectTrainingName();
        } catch (error) {
            showErrorForDevelop('Create training', error);
        } finally {
            onCloseDrawer();
        }
    };

    const selectOptions = remainTraining.map((item) => ({ value: item.name, label: item.name }));

    const onSelectTraining = (value: string) => {
        setSelectTrainingName(value);

        if (!isTrainings) {
            dispatch(trainingActions.clearCreateTraining());
        }

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

    const setStateWorkout = (training: Training) => {
        if (isOldDate(date)) {
            dispatch(trainingActions.setIsImplementation(true));
        }

        dispatch(trainingActions.setIsEdit(true));
        dispatch(trainingActions.setCreateTrainingId(training.training.id));
        dispatch(trainingActions.setCreateTrainingDate(moment(training.date).toISOString()));
        dispatch(trainingActions.setCreateTrainingExercises(training.training.exercises));
        dispatch(trainingActions.setCreateTrainingName(training.training.name));
        dispatch(trainingActions.setCreateTrainingId(training.training.id));
        setSelectTrainingName(training.training.name);
        if (training.training.parameters) {
            dispatch(trainingActions.setCreateTrainingParametrs(training.training.parameters));
        }
    };

    const onEditWorkout = (training: Training) => {
        setStateWorkout(training);
        if (isOldDate(training.date)) {
            dispatch(trainingActions.setIsImplementation(true));
        }
        setIsOpenDrawer((prev) => !prev);
    };

    const onOpenEditWorkoutModal = (training: Training) => {
        setStateWorkout(training);
        if (isOldDate(date)) {
            dispatch(trainingActions.setIsImplementation(true));
        }
        setIsOpenEditWorkoutgModal(true);
    };

    const onCloseEditWorkoutModal = () => {
        dispatch(trainingActions.clearExerciseEmptyName());
        if (isTrainings) {
            dispatch(trainingActions.clearCreateTraining());
            setSelectTrainingName('');
        }
        dispatch(trainingActions.setIsEdit(false));
        setIsOpenEditWorkoutgModal(false);
    };

    return {
        exercises,
        id,
        isAllTraining,
        isButtonSaveDisabled,
        isEditTraining,
        isQueryXS,
        isLoading,
        isLoadingCalendar,
        isOldDay,
        isOpenDrawer,
        isOpenEditWorkoutgModal,
        currentDate,
        createTraining,
        nextStep,
        onCloseDrawer,
        onCloseEditWorkoutModal,
        onEditExercise,
        onEditTraining,
        onEditWorkout,
        onOpenDrawer,
        onOpenEditWorkoutModal,
        onSave,
        onSelectTraining,
        prevStep,
        selectPalForTraining,
        selectOptions,
        selectTrainingName,
        step,
    };
}
