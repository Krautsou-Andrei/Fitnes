import { Checkbox, Input, InputNumber, Space } from 'antd';

import { useExerciseForm } from './hooks';

import { TrainingFormExerciseConfig } from '@features/traning/config';

import { DataTestIdConfig } from '@shared/config';

import styles from './exercise-form.module.less';

type ExerciseFormProps = {
    indexExercise: number;
    exerciseNameDefault: string;
    approachesDefault: number;
    weightDefault: number;
    replaysDefault: number;
    checkedExersices: number[];
    onSetCheckedExercises: (indexExercise: number) => void;
};

export function ExerciseForm({
    indexExercise,
    approachesDefault,
    exerciseNameDefault,
    weightDefault,
    replaysDefault,
    checkedExersices,
    onSetCheckedExercises,
}: ExerciseFormProps) {
    const {
        approaches,
        exerciseName,
        isChecked,
        isEditTraining,
        isSelectPal,
        onChangeApproaches,
        onChangeExerciseName,
        onChangeReplays,
        onChangeWeight,
        replays,
        weight,
    } = useExerciseForm({
        approachesDefault,
        checkedExersices,
        exerciseNameDefault,
        indexExercise,
        replaysDefault,
        weightDefault,
    });

    return (
        <div className={styles['exercise-form']}>
            <Input
                data-test-id={`${DataTestIdConfig.MODAL_DRAWER_RIGHT_INPUT_EXERCISE}${indexExercise}`}
                className={styles['input-exercise']}
                placeholder={TrainingFormExerciseConfig.INPUT_PLACEHOLDER_EXERCISE}
                value={exerciseName}
                onChange={onChangeExerciseName}
                autoFocus={true}
                addonAfter={
                    (isEditTraining || isSelectPal) && (
                        <Checkbox
                            data-test-id={`${DataTestIdConfig.MODAL_DRAWER_RIGHT_CHECKBOX_EXERCISE}${indexExercise}`}
                            checked={isChecked}
                            onChange={() => onSetCheckedExercises(indexExercise)}
                        />
                    )
                }
            />
            <Space className={styles['wrapper-labels']}>
                <label>
                    <div className={styles['label-exericise']}>
                        {TrainingFormExerciseConfig.LABEL_APPROACHES}
                    </div>
                    <InputNumber
                        data-test-id={`${DataTestIdConfig.MODAL_DRAWER_RIGHT_INPUT_APPROACH}${indexExercise}`}
                        addonBefore='+'
                        value={approaches}
                        onChange={onChangeApproaches}
                    />
                </label>
                <Space className={styles['labels-right']}>
                    <label>
                        <div className={styles['label-exericise']}>
                            {TrainingFormExerciseConfig.LABEL_WEIGHT}
                        </div>
                        <InputNumber
                            data-test-id={`${DataTestIdConfig.MODAL_DRAWER_RIGHT_INPUT_WEIGHT}${indexExercise}`}
                            value={weight}
                            onChange={onChangeWeight}
                        />
                    </label>
                    <div>x</div>
                    <label>
                        <div className={styles['label-exericise']}>
                            {TrainingFormExerciseConfig.LABEL_REPLAYS}
                        </div>
                        <InputNumber
                            data-test-id={`${DataTestIdConfig.MODAL_DRAWER_RIGHT_INPUT_QUANTUTY}${indexExercise}`}
                            value={replays}
                            onChange={onChangeReplays}
                        />
                    </label>
                </Space>
            </Space>
        </div>
    );
}
