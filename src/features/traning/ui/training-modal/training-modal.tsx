import { useState } from 'react';
import { Button } from 'antd';
import clsn from 'classnames';
import type { Moment } from 'moment';

import { AppDrawer } from '../app-drawer';
import { ExtraAddExercise, ExtraViewTraining } from './extra';

import { addTraningThunk } from '@features/traning/model/add-training';
import {
    type TrainingName,
    type TrainingType,
    selectCreateTraining,
    trainingActions,
} from '@entities/training';

import { DateFormatConfig, LayoutConfig } from '@shared/config';
import { AppCard } from '@shared/ui';
import { formatDate, isOldDate, showErrorForDevelop } from '@shared/lib';
import { useAppDispatch, useAppSelector } from '@shared/hooks';

import styles from './taining-modal.module.less';

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
    const { exercises } = useAppSelector(selectCreateTraining);
    const dispatch = useAppDispatch();

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
    const [selectExercise, setSelectExercise] = useState('');

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
        setIsOpenDrawer((prev) => !prev);
    };

    const onCloseDrawer = () => {
        setIsOpenDrawer((prev) => !prev);
    };

    const onSave = async () => {
        try {
            dispatch(addTraningThunk(createTraining));
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
                                onCloseAddTraining={onCloseAddTraining}
                            />
                        )}
                        {step === 2 && (
                            <ExtraAddExercise
                                listTraining={remainTraining}
                                prevStep={prevStep}
                                setSelectExercise={setSelectExercise}
                                selectExercise={selectExercise}
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
                            disabled={Boolean(selectExercise === '')}
                        >
                            {LayoutConfig.BUTTON_ADD_EXERCISE}
                        </Button>
                        <Button block type='text' onClick={onSave}>
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
