import type { Dispatch, SetStateAction } from 'react';
import { Button, Empty, Space } from 'antd';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';

import { trainingActions, type Exercises, type TrainingType } from '@entities/training';
import { LayoutConfig } from '@shared/config';

import { AppBadge } from '@shared/ui';
import { useAppDispatch } from '@shared/hooks';
import { STYLES } from '@shared/config/constants';

import styles from './extra-view-training.module.less';

type ExtraViewTrainingProps = {
    date: string;
    nextStep: () => void;
    onCloseAddTraining: () => void;
    listTraining: TrainingType[];
    setSelectTrainingName: Dispatch<SetStateAction<string>>;
};

export function ExtraViewTraining({
    date,
    nextStep,
    onCloseAddTraining,
    listTraining,
    setSelectTrainingName,
}: ExtraViewTrainingProps) {
    const dispatch = useAppDispatch();

    const onEditTraining = (id: string, name: string, exercises: Exercises[]) => {
        dispatch(trainingActions.setCreateTrainingId(id));
        dispatch(trainingActions.setIsEdit(true));
        dispatch(trainingActions.setCreateTrainingExercises(exercises));
        dispatch(trainingActions.setCreateTrainingName(name));
        setSelectTrainingName(name);
        nextStep();
    };

    return (
        <>
            <div className={styles['header-wrapper']}>
                <div className={styles['title-wrapper']}>
                    <div className={styles['calendar-cell-title']}>
                        {LayoutConfig.TITLE_MODAL_TRAINING_DATE + date}
                    </div>
                    {!listTraining.length && (
                        <div className={styles['calendar-cell-sub-title']}>
                            {LayoutConfig.NO_ACTIVE_TRAINING}
                        </div>
                    )}
                </div>
                <Button
                    className={styles.button}
                    type='text'
                    size='small'
                    onClick={onCloseAddTraining}
                    icon={<CloseOutlined />}
                />
            </div>
            <div className={styles['header-body']}>
                {listTraining.length ? (
                    listTraining.map((item) => (
                        <div key={item.id} className={styles['trainig-item']}>
                            <Space>
                                <AppBadge name={item.name} />
                                {item.name}
                            </Space>
                            <Button
                                type='link'
                                className={styles['button-edit']}
                                onClick={() => onEditTraining(item.id, item.name, item.exercises)}
                            >
                                <EditOutlined />
                            </Button>
                        </div>
                    ))
                ) : (
                    <Empty
                        className={styles.empty}
                        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                        imageStyle={{ height: STYLES.HEIGHT_EMPTY_TRAINIG_MODAL }}
                    />
                )}
            </div>
        </>
    );
}
