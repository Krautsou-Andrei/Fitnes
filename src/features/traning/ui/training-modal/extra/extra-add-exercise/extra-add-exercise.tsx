import { useState } from 'react';
import { Button, Select } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { trainingActions, type TrainingName } from '@entities/training';

import { LayoutConfig } from '@shared/config';
import { useAppDispatch } from '@shared/hooks';

import styles from './extra-add-exercise.module.less';

type ExtraAddExerciseProps = {
    prevStep: () => void;
    listTraining: TrainingName[] | [];
};

export function ExtraAddExercise({ prevStep, listTraining }: ExtraAddExerciseProps) {
    const dispatch = useAppDispatch();
    const [selectExercise, setSelectExercise] = useState('');
    const selectOptions = listTraining.map((item) => ({ value: item.name, label: item.name }));

    const onSelectExercise = (value: string) => {
        setSelectExercise(value);

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
                    value={selectExercise || LayoutConfig.TITLE_MODAL_CHANGE_EXERCISE}
                    className={styles['select-exercise']}
                    options={selectOptions}
                    onChange={onSelectExercise}
                />
            </div>
        </>
    );
}
