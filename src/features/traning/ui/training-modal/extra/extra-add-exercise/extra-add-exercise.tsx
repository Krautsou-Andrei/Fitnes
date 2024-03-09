import { type Dispatch, type SetStateAction, useState } from 'react';
import { Button, Divider, Empty, Select, Space } from 'antd';
import { ArrowLeftOutlined, EditOutlined } from '@ant-design/icons';

import {
    type Exercises,
    type TrainingType,
    type TrainingName,
    trainingActions,
} from '@entities/training';

import { LayoutConfig } from '@shared/config';
import { useAppDispatch } from '@shared/hooks';

import styles from './extra-add-exercise.module.less';
import { STYLES } from '@shared/config/constants';

type ExtraAddExerciseProps = {
    prevStep: () => void;
    listTrainingName: TrainingName[] | [];
    listTraining: TrainingType[] | [];
    setSelectExercise: Dispatch<SetStateAction<string>>;
    selectExercise: string;
};

export function ExtraAddExercise({
    prevStep,
    listTrainingName,
    listTraining,
    selectExercise,
    setSelectExercise,
}: ExtraAddExerciseProps) {
    const dispatch = useAppDispatch();
    const [selectTraining, setSelectTraining] = useState<Exercises[] | []>([]);

    const selectOptions = listTrainingName.map((item) => ({ value: item.name, label: item.name }));

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
            <Divider className={styles['training-add-title-divider']} />
            <div className={styles['header-body']}>
                {selectTraining.length ? (
                    selectTraining.map((item) => (
                        <div key={item.id} className={styles['trainig-item']}>
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
