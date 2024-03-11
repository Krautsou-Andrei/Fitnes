import type { Dispatch, SetStateAction } from 'react';
import { Button, Empty, Space } from 'antd';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { type Moment } from 'moment';

import { trainingActions, type Exercises, type TrainingType } from '@entities/training';
import { DateFormatConfig, LayoutConfig } from '@shared/config';

import { AppTrainingDay } from '@shared/ui';
import { useAppDispatch } from '@shared/hooks';
import { formatDate, isOldDate } from '@shared/lib';
import { STYLES } from '@shared/config/constants';

import styles from './extra-view-training.module.less';

type ExtraViewTrainingProps = {
    date: Moment;
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
    const currentDate = formatDate(date, DateFormatConfig.FORMAT_DD_MN_YYYY_DOT);

    const onEditTraining = (id: string, name: string, exercises: Exercises[]) => {
        dispatch(trainingActions.setCreateTrainingId(id));
        dispatch(trainingActions.setIsEdit(true));
        dispatch(trainingActions.setCreateTrainingExercises(exercises));
        dispatch(trainingActions.setCreateTrainingName(name));
        if (isOldDate(date)) {
            dispatch(trainingActions.setIsImplementation(true));
        }
        setSelectTrainingName(name);
        nextStep();
    };

    return (
        <>
            <div className={styles['header-wrapper']}>
                <div className={styles['title-wrapper']}>
                    <div className={styles['calendar-cell-title']}>
                        {LayoutConfig.TITLE_MODAL_TRAINING_DATE + currentDate}
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
                            <AppTrainingDay
                                name={item.name}
                                isImplementation={item.isImplementation}
                            />
                            <Button
                                type='link'
                                className={styles['button-edit']}
                                disabled={item.isImplementation}
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
