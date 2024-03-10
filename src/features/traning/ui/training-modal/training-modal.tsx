import { useState } from 'react';
import { Button } from 'antd';
import clsn from 'classnames';
import moment, { type Moment } from 'moment';

import { AppDrawer } from '../app-drawer';
import { ExtraAddExercise, ExtraViewTraining } from './extra';

import { addTraningThunk } from '@features/traning/model/add-training';
import {
    type TrainingName,
    type TrainingType,
    selectCreateTraining,
    trainingActions,
    selectIsEdit,
} from '@entities/training';

import { DateFormatConfig, LayoutConfig } from '@shared/config';
import { AppCard } from '@shared/ui';
import { formatDate, isOldDate, showErrorForDevelop } from '@shared/lib';
import { useAppDispatch, useAppSelector } from '@shared/hooks';

import styles from './taining-modal.module.less';
import { editTraningThunk } from '@features/traning/model/edit-training';

type AddNewTrainingModalProps = {
    date: string | Moment;
    isOffSet: boolean;
    listTraining: TrainingName[] | [];
    onCloseAddTraining: () => void;
    trainingsDay: TrainingType[];
};

export function TrainingModal({
    date,
    listTraining,
    isOffSet,
    onCloseAddTraining,
    trainingsDay,
}: AddNewTrainingModalProps) {
    const { exercises, id } = useAppSelector(selectCreateTraining);
    const isEditTraining = useAppSelector(selectIsEdit);
    const dispatch = useAppDispatch();
    console.log('trainingsDay', trainingsDay);

    const createTraining = useAppSelector(selectCreateTraining);
    const currentDate = formatDate(date, DateFormatConfig.FORMAT_DD_MN_YYYY_DOT);
    const isOldDay = isOldDate(date);
    const isAllTraining = trainingsDay.length === listTraining.length;

    const remainTraining = listTraining.filter((training) => {
        if (!trainingsDay.some((item) => item.name === training.name)) {
            return training;
        }
    });

    const [step, setStep] = useState(1);
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [selectTrainingName, setSelectTrainingName] = useState('');

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
        try {
            if (isEditTraining) {
                await dispatch(editTraningThunk({ trainingId: id, body: createTraining }));
            } else {
                await dispatch(addTraningThunk(createTraining));
            }

            dispatch(trainingActions.clearCreateTraining());
            setStep(1);
        } catch (error: unknown) {
            showErrorForDevelop('Create training', error);
        }
    };

    return (
        <>
            <AppCard
                className={clsn(styles['calendar-cell'], {
                    [styles['calendar-cell-right']]: isOffSet,
                })}
                extra={
                    <>
                        {step === 1 && (
                            <ExtraViewTraining
                                date={currentDate}
                                listTraining={trainingsDay}
                                nextStep={nextStep}
                                onCloseAddTraining={onCloseAddTraining}
                                setSelectTrainingName={setSelectTrainingName}
                            />
                        )}
                        {step === 2 && (
                            <ExtraAddExercise
                                listTrainingName={remainTraining}
                                listTraining={trainingsDay}
                                prevStep={prevStep}
                                setSelectTrainingName={setSelectTrainingName}
                                selectTrainingName={selectTrainingName}
                            />
                        )}
                    </>
                }
            >
                {step === 1 && (
                    <Button
                        type='primary'
                        block
                        className={styles['button-create']}
                        onClick={nextStep}
                        disabled={isOldDay || isAllTraining}
                    >
                        {trainingsDay.length
                            ? LayoutConfig.BUTTON_ADD_TRAINING
                            : LayoutConfig.BUTTON_CREATE_TRAINING}
                    </Button>
                )}
                {step === 2 && (
                    <div className=''>
                        <Button
                            block
                            onClick={onOpenDrawer}
                            disabled={Boolean(selectTrainingName === '')}
                        >
                            {LayoutConfig.BUTTON_ADD_EXERCISE}
                        </Button>
                        <Button block type='text' onClick={onSave} disabled={!exercises.length}>
                            {LayoutConfig.BUTTON_SAVE_EXERCISE}
                        </Button>
                    </div>
                )}
            </AppCard>
            <AppDrawer
                createTraining={createTraining}
                isOpen={isOpenDrawer}
                onClickClose={onCloseDrawer}
            />
        </>
    );
}
