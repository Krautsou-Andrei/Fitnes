import { Button } from 'antd';
import { DownOutlined, EditOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/lib/table';

import { WorkoutsConfig } from './workouts-config';
import { EditWorkoutModal } from '../ui/edit-workout-modal';

import type { Training } from '@entities/training';

import { DataTestIdConfig, DateFormatConfig } from '@shared/config';
import { formatDate, getPeriodFindNumber, isOldDate } from '@shared/lib';
import { AppTrainingDay } from '@shared/ui';

type ColumnsWorkoutsConfigProps = {
    onEditWorkout: (training: Training) => void;
    onOpenEditWorkoutModal: (training: Training) => void;
    onCloseEditWorkoutModal: () => void;
    id: string;
    isOpenEditWorkoutgModal: boolean;
    styles?: {
        [key: string]: string;
    };
};

export function columnsWorkoutsConfig({
    onEditWorkout,
    onOpenEditWorkoutModal,
    onCloseEditWorkoutModal,
    id,
    isOpenEditWorkoutgModal,
    styles,
}: ColumnsWorkoutsConfigProps): ColumnsType<Training> {
    return [
        {
            title: WorkoutsConfig.TITLE_TRAINING_TYPE_TABLE,
            dataIndex: 'trainingType',
            key: 'trainingType',
            render: (_text, record) => (
                <div
                    className={styles && styles['column-type-training']}
                    title={formatDate(record.date, DateFormatConfig.FORMAT_YYYY_MM_DD_DASHED)}
                >
                    <AppTrainingDay
                        name={record.training.name}
                        isImplementation={record.training.isImplementation}
                    />
                    <Button
                        type='link'
                        onClick={() => onOpenEditWorkoutModal(record)}
                        disabled={isOldDate(record.date)}
                    >
                        <DownOutlined />
                    </Button>
                    {isOpenEditWorkoutgModal && record.training.id === id && (
                        <EditWorkoutModal
                            selectTrainingName={record.training.name}
                            exercises={record.training.exercises}
                            onCloseEditTrainingModal={onCloseEditWorkoutModal}
                            onOpenDrawer={() => onEditWorkout(record)}
                        />
                    )}
                </div>
            ),
        },
        {
            key: 'period',
            title: WorkoutsConfig.TITLE_PERIOD_TABLE,
            dataIndex: 'period',
            render: (_text, record) => (
                <div>{getPeriodFindNumber(record.training.parameters?.period)}</div>
            ),
            sorter: (a, b) => {
                const periodOne = a.training.parameters?.period ?? 0;
                const periodTwo = b.training.parameters?.period ?? 0;

                return periodOne - periodTwo;
            },
        },
        {
            key: 'action',
            title: '',
            dataIndex: 'action',
            render: (_text, record, index) => (
                <Button
                    data-test-id={`${DataTestIdConfig.UPDATE_MY_TRAINING_TABLE_ICON}${index}`}
                    type='link'
                    disabled={record.training.isImplementation}
                    onClick={() => onEditWorkout(record)}
                >
                    <EditOutlined />
                </Button>
            ),
        },
    ];
}
