import { Button, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { columnsWorkoutsConfig } from '@features/traning/config';
import { useChangeHeightTable } from '@features/traning/hooks';

import { type Training, selectTraining } from '@entities/training';

import { useAppSelector } from '@shared/hooks';
import { LayoutConfig } from '@shared/config';
import { sortTrainingPeriod } from '@shared/lib';

import styles from './table-trainings.module.less';

type TableTrainingsProps = {
    onOpenDrawer: () => void;
    onEditWorkout: (training: Training) => void;
    onOpenEditWorkoutModal: (training: Training) => void;
    onCloseEditWorkoutModal: () => void;
    id: string;
    isOpenEditWorkoutgModal: boolean;
};

export function TableTrainings({
    onOpenDrawer,
    onOpenEditWorkoutModal,
    onCloseEditWorkoutModal,
    onEditWorkout,
    id,
    isOpenEditWorkoutgModal,
}: TableTrainingsProps) {
    const { quantityItems } = useChangeHeightTable();
    const trainingsState = useAppSelector(selectTraining);
    const trainings = sortTrainingPeriod(trainingsState);

    const allTrainings = trainings.map((training) => ({ ...training, key: training.training.id }));

    return (
        <div className={styles['table-wrapper']}>
            <Table
                columns={columnsWorkoutsConfig({
                    onEditWorkout,
                    onOpenEditWorkoutModal,
                    onCloseEditWorkoutModal,
                    id,
                    isOpenEditWorkoutgModal,
                    styles,
                })}
                pagination={{
                    position: ['bottomLeft', 'bottomLeft'],
                    hideOnSinglePage: true,
                    pageSize: quantityItems,
                }}
                dataSource={allTrainings}
                size='small'
            />
            <Button type='primary' size='large' icon={<PlusOutlined />} onClick={onOpenDrawer}>
                {LayoutConfig.BUTTON_NEW_TRAINING}
            </Button>
        </div>
    );
}
