import { Button, Drawer, Space, Typography } from 'antd';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

import { useAppDrawer } from './hooks';

import { TrainingFormExerciseConfig } from '@features/traning/config';
import { ExerciseForm } from './ui/exercise-form';

import { CreateTraining } from '@entities/training';

import { formatDate, splitString } from '@shared/lib';
import { DataTestIdConfig, DateFormatConfig } from '@shared/config';
import { AppBadge } from '@shared/ui';

import styles from './app-drawer.module.less';

const { Title } = Typography;

type AppDrawerProps = {
    createTraining: CreateTraining;
    isOpen: boolean;
    isOldDay: boolean;
    onClickClose: () => void;
};

export function AppDrawer({ createTraining, isOldDay, isOpen, onClickClose }: AppDrawerProps) {
    const {
        addExercise,
        checkedExersices,
        deleteExercise,
        exercises,
        isEdit,
        onSetCheckedExercises,
    } = useAppDrawer();
  
    return (
        <Drawer
            mask={false}
            data-test-id={DataTestIdConfig.MODAL_DRAWER_RIGHT}
            className={styles['app-drawer']}
            open={isOpen}
            onClose={onClickClose}
            closeIcon={
                <CloseOutlined data-test-id={DataTestIdConfig.MODAL_DRAWER_RIGHT_BUTTON_CLOSE} />
            }
            extra={
                <Space>
                    <PlusOutlined />
                    <Title level={4}>
                        {isEdit
                            ? TrainingFormExerciseConfig.TITLE_DRAWER_EDIT
                            : TrainingFormExerciseConfig.TITLE_DRAWER}
                    </Title>
                </Space>
            }
        >
            <div className={styles['form-wrapper']}>
                <Space className={styles['title-exercise']}>
                    <Space>
                        <AppBadge name={createTraining.name} />
                        <div>{createTraining.name}</div>
                    </Space>
                    <div>
                        {formatDate(createTraining.date, DateFormatConfig.FORMAT_DD_MN_YYYY_DOT)}
                    </div>
                </Space>
                <div className={styles['exercises']}>
                    {exercises.map((exercise, index: number) => (
                        <ExerciseForm
                            key={exercise.name + index}
                            indexExercise={index}
                            approachesDefault={exercise.approaches}
                            exerciseNameDefault={exercise.name}
                            replaysDefault={exercise.replays}
                            weightDefault={exercise.weight}
                            checkedExersices={checkedExersices}
                            onSetCheckedExercises={onSetCheckedExercises}
                        />
                    ))}
                </div>
                <div className={styles['button-wrapper']}>
                    <Button type='link' icon={<PlusOutlined />} size='small' onClick={addExercise}>
                        {TrainingFormExerciseConfig.BUTTON_ADD_EXERCISE}
                    </Button>
                    {isEdit && (
                        <Button
                            className={styles['button-delete']}
                            type='link'
                            icon={<MinusOutlined />}
                            size='small'
                            disabled={!checkedExersices.length}
                            onClick={deleteExercise}
                        >
                            {TrainingFormExerciseConfig.BUTTON_DELETE_EXERCISE}
                        </Button>
                    )}
                </div>
            </div>
            {isOldDay && (
                <div className={styles.notification}>
                    {splitString(TrainingFormExerciseConfig.NOTIFICATION)}
                </div>
            )}
        </Drawer>
    );
}