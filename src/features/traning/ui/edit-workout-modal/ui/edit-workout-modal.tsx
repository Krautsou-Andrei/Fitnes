import { Button } from 'antd';

import { ExtraEditTraining } from '../extra';

import { Exercises } from '@entities/training';

import { LayoutConfig } from '@shared/config';
import { AppCard } from '@shared/ui';

import styles from './edit-workout-modal.module.less';

type EditWorkoutModalProps = {
    exercises: Exercises[];
    selectTrainingName: string;
    onOpenDrawer: () => void;
    onCloseEditTrainingModal: () => void;
};

export function EditWorkoutModal({
    selectTrainingName,
    exercises,
    onOpenDrawer,
    onCloseEditTrainingModal,
}: EditWorkoutModalProps) {
    return (
        <>
            <AppCard
                className={styles['workout-modal']}
                extra={
                    <>
                        <ExtraEditTraining
                            exercises={exercises}
                            selectTrainingName={selectTrainingName}
                            onCloseEditTrainingModal={onCloseEditTrainingModal}
                        />
                    </>
                }
            >
                <div>
                    <Button
                        block
                        onClick={onOpenDrawer}
                        disabled={Boolean(selectTrainingName === '')}
                    >
                        {LayoutConfig.BUTTON_ADD_EXERCISE}
                    </Button>
                </div>
            </AppCard>
        </>
    );
}
