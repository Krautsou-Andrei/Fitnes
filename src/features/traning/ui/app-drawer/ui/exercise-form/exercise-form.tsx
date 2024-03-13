import { ChangeEvent, useState } from 'react';
import { Checkbox, Input, InputNumber, Space } from 'antd';

import { ExercisesDefaultConfig, TrainingFormExerciseConfig } from '@features/traning/config';

import { selectIsEdit, trainingActions } from '@entities/training';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
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
    const dispatch = useAppDispatch();
    const isEditTraining = useAppSelector(selectIsEdit);

    const [approaches, setApproaches] = useState<number>(
        approachesDefault || ExercisesDefaultConfig.APPROACHES,
    );
    const [exerciseName, setExerciseName] = useState<string>(
        exerciseNameDefault || ExercisesDefaultConfig.EXERCISE_NAME,
    );
    const [replays, setReplays] = useState<number>(
        replaysDefault || ExercisesDefaultConfig.REPLAYS,
    );
    const [weight, setWeight] = useState<number>(weightDefault || ExercisesDefaultConfig.WEIGHT);

    const isChecked = checkedExersices.includes(indexExercise);

    const onChangeExerciseName = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;       
        setExerciseName(value);
        dispatch(
            trainingActions.setCreateTrainingExercise({
                partialExercises: { name: value },
                index: indexExercise,
            }),
        );
    };

    const onChangeApproaches = (value: number | null) => {
        if (value && value > 0) {
            setApproaches(value);
        }
    };

    const onChangeWeight = (value: number | null) => {
        if (value !== null && value >= 0) {
            setWeight(value);
        }
    };

    const onChangeReplays = (value: number | null) => {
        if (value && value > 0) {
            setReplays(value);
        }
    };

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
                    isEditTraining && (
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
