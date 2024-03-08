import { Button, Drawer, Space, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { TrainingFormExerciseConfig } from '@features/traning/config';
import { ExerciseForm } from './ui/exercise-form';

import { CreateTraining, selectCreateTraining } from '@entities/training';

import { formatDate } from '@shared/lib';
import { DateFormatConfig } from '@shared/config';
import { AppBadge } from '@shared/ui';
import { useAppSelector } from '@shared/hooks';

import styles from './app-drawer.module.less';

const { Title } = Typography;

type AppDrawerProps = {
    createTraining: CreateTraining;
    isOpen: boolean;
    onClickClose: () => void;
};

export function AppDrawer({ createTraining, isOpen, onClickClose }: AppDrawerProps) {
    const { exercises } = useAppSelector(selectCreateTraining);

    return (
        <Drawer
            className={styles['app-drawer']}
            open={isOpen}
            onClose={onClickClose}
            extra={
                <Space>
                    <PlusOutlined />
                    <Title level={4}>{TrainingFormExerciseConfig.TITLE_DRAWER}</Title>
                </Space>
            }
        >
            <Space className={styles['title-exercise']}>
                <Space>
                    <AppBadge name={createTraining.name} />
                    <div>{createTraining.name}</div>
                </Space>
                <div>{formatDate(createTraining.date, DateFormatConfig.FORMAT_DD_MN_YYYY_DOT)}</div>
            </Space>
            <div className={styles['exercises']}>
                {exercises.map((exercise, index: number) => (
                    <ExerciseForm key={index} indexExercise={index} />
                ))}
            </div>
            <div className={styles['button-wrapper']}>
                <Button
                    className={styles['button-add']}
                    type='link'
                    icon={<PlusOutlined />}
                    size='small'
                >
                    {TrainingFormExerciseConfig.BUTTON_ADD_EXERCISE}
                </Button>
            </div>
        </Drawer>
    );
}
