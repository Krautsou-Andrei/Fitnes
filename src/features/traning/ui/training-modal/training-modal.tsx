import { Button } from 'antd';
import clsn from 'classnames';
import { type Moment } from 'moment';

import { AppDrawer } from '../app-drawer';
import { ExtraAddExercise, ExtraViewTraining } from './extra';

import { useTainingModal } from '@features/traning/hooks';
import { CancelChangeTrainingNotification } from '@features/notification/ui';

import { type TrainingName, type TrainingType } from '@entities/training';

import { DataTestIdConfig, LayoutConfig } from '@shared/config';
import { AppCard } from '@shared/ui';

import styles from './training-modal.module.less';

type AddNewTrainingModalProps = {
    date: Moment;
    isOffSet: boolean;
    listTraining: TrainingName[] | [];
    onCloseAddTraining: () => void;
    offSetTop?: number;
    trainingsDay: TrainingType[];
};

export function TrainingModal({
    date,
    listTraining,
    isOffSet,
    offSetTop,
    onCloseAddTraining,
    trainingsDay,
}: AddNewTrainingModalProps) {
    const {
        exercises,
        isAllTraining,
        isQueryXS,
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
    } = useTainingModal({
        date,
        listTraining,
        trainingsDay,
    });

    return (
        <>
            <AppCard
                data-test-id={
                    step === 1
                        ? DataTestIdConfig.MODAL_CREATE_TRAINING
                        : DataTestIdConfig.MODAL_CREATE_EXEXRCISE
                }
                className={clsn(
                    styles['calendar-cell'],
                    {
                        [styles['calendar-cell-right']]: isOffSet,
                    },
                    {
                        [styles['calendar-cell-mobile']]: isQueryXS,
                    },
                )}
                style={offSetTop ? { top: `${offSetTop}px` } : undefined}
                extra={
                    <>
                        {step === 1 && (
                            <ExtraViewTraining
                                currentDate={currentDate}
                                listTraining={trainingsDay}
                                onCloseAddTraining={onCloseAddTraining}
                                onEditTraining={onEditTraining}
                            />
                        )}
                        {step === 2 && (
                            <ExtraAddExercise
                                exercises={exercises}
                                selectOptions={selectOptions}
                                onEditExercise={onEditExercise}
                                onSelectTraining={onSelectTraining}
                                prevStep={prevStep}
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
                        <Button
                            block
                            type='text'
                            onClick={onSave}
                            disabled={!exercises.length}
                            loading={isLoadingCalendar}
                        >
                            {isOldDay
                                ? LayoutConfig.BUTTON_SAVE_CHANGE_EXERCISE
                                : LayoutConfig.BUTTON_SAVE_EXERCISE}
                        </Button>
                    </div>
                )}
            </AppCard>
            <AppDrawer
                createTraining={createTraining}
                isOpen={isOpenDrawer}
                onClickClose={onCloseDrawer}
            />

            <CancelChangeTrainingNotification onCancel={onCancelRequestEditTraning} />
        </>
    );
}
