import { Button, Divider, Empty, Select } from 'antd';
import { ArrowLeftOutlined, EditOutlined } from '@ant-design/icons';

import { SelectOptions } from '@features/traning/model/types';
import { Exercises } from '@entities/training';

import { DataTestIdConfig, LayoutConfig } from '@shared/config';
import { STYLES } from '@shared/config/constants';

import styles from './extra-add-exercise.module.less';

type ExtraAddExerciseProps = {
    exercises: Exercises[];
    prevStep: () => void;
    selectTrainingName: string;
    selectOptions: SelectOptions[];
    onEditExercise: () => void;
    onSelectTraining: (value: string) => void;
};

export function ExtraAddExercise({
    exercises,
    prevStep,
    selectTrainingName,
    selectOptions,
    onEditExercise,
    onSelectTraining,
}: ExtraAddExerciseProps) {
    return (
        <>
            <div className={styles['header-wrapper']}>
                <Button
                    data-test-id={DataTestIdConfig.MODAL_EXERCISE_TRAINING_BUTTON_CLOSE}
                    className={styles.button}
                    type='text'
                    size='small'
                    onClick={prevStep}
                    icon={<ArrowLeftOutlined />}
                />
                <Select
                    data-test-id={DataTestIdConfig.MODAL_CREATE_EXERCISE_SELECT}
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
                            <Button
                                type='link'
                                className={styles['button-edit']}
                                onClick={onEditExercise}
                                data-test-id={`${DataTestIdConfig.MODAL_UPADATE_TRAINING_EDIT_BUTTON}${index}`}
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
