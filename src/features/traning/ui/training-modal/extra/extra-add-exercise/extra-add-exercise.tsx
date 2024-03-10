import type { Dispatch, SetStateAction } from 'react';
import { Button, Divider, Empty, Select } from 'antd';
import { ArrowLeftOutlined, EditOutlined } from '@ant-design/icons';

import {
    type TrainingType,
    type TrainingName,
    trainingActions,
    selectCreateTraining,
} from '@entities/training';

import { LayoutConfig } from '@shared/config';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { STYLES } from '@shared/config/constants';

import styles from './extra-add-exercise.module.less';

type ExtraAddExerciseProps = {
    prevStep: () => void;
    listTrainingName: TrainingName[] | [];
    listTraining: TrainingType[] | [];
    setSelectTrainingName: Dispatch<SetStateAction<string>>;
    selectTrainingName: string;
};

export function ExtraAddExercise({
    prevStep,
    listTrainingName,
    selectTrainingName,
    setSelectTrainingName,
}: ExtraAddExerciseProps) {
    const dispatch = useAppDispatch();
    const { exercises } = useAppSelector(selectCreateTraining);

    const selectOptions = listTrainingName.map((item) => ({ value: item.name, label: item.name }));

    const onSelectTraining = (value: string) => {
        setSelectTrainingName(value);

        dispatch(trainingActions.clearCreateTraining());
        dispatch(trainingActions.setCreateTrainingName(value));
    };
    return (
        <>
            <div className={styles['header-wrapper']}>
                <Button
                    className={styles.button}
                    type='text'
                    size='small'
                    onClick={prevStep}
                    icon={<ArrowLeftOutlined />}
                />
                <Select
                    value={selectTrainingName || LayoutConfig.TITLE_MODAL_CHANGE_EXERCISE}
                    className={styles['select-exercise']}
                    options={selectOptions}
                    onChange={onSelectTraining}
                />
            </div>
            <Divider className={styles['training-add-title-divider']} />
            <div className={styles['header-body']}>
                {exercises.length ? (
                    exercises.map((item, index) => (
                        <div key={item.name + index} className={styles['trainig-item']}>
                            {item.name}
                            <Button type='link' className={styles['button-edit']}>
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
