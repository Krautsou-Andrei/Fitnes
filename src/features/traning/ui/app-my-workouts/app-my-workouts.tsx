import {
    selectCreateTraining,
    selectTraining,
    selectTrainingName as selectTrainingList,
} from '@entities/training';
import { useTainingModal } from '../../hooks/use-training-modal';
import { AppButtonSaveExercise } from '../app-button-save-exercise';
import { AppDrawer } from '../app-drawer';

import { selectIsLoadingn } from '@entities/session';
import { selectIsError } from '@entities/session/model/slice';

import { DateFormatConfig, LayoutConfig } from '@shared/config';
import { useAppSelector } from '@shared/hooks';
import { AppNoTrainings } from '@shared/ui';
import { formatDate } from '@shared/lib';

import { TableTrainings } from './ui';
import { TrainingFormExerciseConfig } from '@features/traning/config';

export function AppMyWorkouts() {
    const trainings = useAppSelector(selectTraining);
    const listTraining = useAppSelector(selectTrainingList);
    const createTraining = useAppSelector(selectCreateTraining);

    const chankSelector = formatDate(
        createTraining.date || '',
        DateFormatConfig.FORMAT_YYYY_MM_DD_DASHED,
    );
    const trainingsDay = trainings
        .filter((item) => item.date === chankSelector)
        .map((item) => item.training);

    const isLoading = useAppSelector(selectIsLoadingn);
    const isError = useAppSelector(selectIsError);

    const {
        id,
        isEditTraining,
        isOldDay,
        isOpenDrawer,
        isOpenEditWorkoutgModal,
        onCloseDrawer,
        onCloseEditWorkoutModal,
        onOpenDrawer,
        onOpenEditWorkoutModal,
        onSave,
        onSelectTraining,
        onEditWorkout,
        selectOptions,
        selectTrainingName,
    } = useTainingModal({
        listTraining,
        trainingsDay,
    });

    return (
        <>
            {trainings.length !== 0 && (
                <TableTrainings
                    onOpenDrawer={onOpenDrawer}
                    onEditWorkout={onEditWorkout}
                    onOpenEditWorkoutModal={onOpenEditWorkoutModal}
                    onCloseEditWorkoutModal={onCloseEditWorkoutModal}
                    id={id}
                    isOpenEditWorkoutgModal={isOpenEditWorkoutgModal}
                />
            )}
            {!isLoading && !isError && trainings.length === 0 && (
                <AppNoTrainings
                    text={LayoutConfig.NO_CREATED_TRAININGS}
                    isTrainingsNames={listTraining.length !== 0}
                    onClick={onOpenDrawer}
                />
            )}
            <AppDrawer
                createTraining={createTraining}
                isOldDay={isOldDay}
                isOpen={isOpenDrawer}
                onClickClose={onCloseDrawer}
                buttonSave={<AppButtonSaveExercise onClick={onSave} />}
                title={
                    isEditTraining
                        ? TrainingFormExerciseConfig.TITLE_DRAWER_EDIT_EXERCISE
                        : TrainingFormExerciseConfig.TITLE_DRAWER_NEW_TRAINING
                }
                isMyTrainings={true}
                onSelectTraining={onSelectTraining}
                selectOptions={selectOptions}
                selectTrainingName={selectTrainingName}
            />
        </>
    );
}
