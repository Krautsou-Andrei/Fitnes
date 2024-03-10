import { ChangeEvent, useState } from 'react';
import { Input, InputNumber, Space } from 'antd';

import { ExercisesDefaultConfig, TrainingFormExerciseConfig } from '@features/traning/config';

import { trainingActions } from '@entities/training';

import { useAppDispatch } from '@shared/hooks';

import styles from './exercise-form.module.less';

type ExerciseFormProps = {
    indexExercise: number;
    exerciseNameDefault: string;
    approachesDefault: number;
    weightDefault: number;
    replaysDefault: number;
};

export function ExerciseForm({
    indexExercise,    
    approachesDefault,
    exerciseNameDefault,
    weightDefault,
    replaysDefault,    
}: ExerciseFormProps) {
    const dispatch = useAppDispatch();

    const [approaches, setApproaches] = useState<number>( approachesDefault || ExercisesDefaultConfig.APPROACHES );
    const [exerciseName, setExerciseName] = useState<string>( exerciseNameDefault || ExercisesDefaultConfig.EXERCISE_NAME );
    const [replays, setReplays] = useState<number>( replaysDefault || ExercisesDefaultConfig.REPLAYS );
    const [weight, setWeight] = useState<number>(weightDefault || ExercisesDefaultConfig.WEIGHT);

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
                className={styles['input-exercise']}
                placeholder={TrainingFormExerciseConfig.INPUT_PLACEHOLDER_EXERCISE}
                value={exerciseName}
                onChange={onChangeExerciseName}
            />
            <Space className={styles['wrapper-labels']}>
                <label>
                    <div className={styles['label-exericise']}>
                        {TrainingFormExerciseConfig.LABEL_APPROACHES}
                    </div>
                    <InputNumber addonBefore='+' value={approaches} onChange={onChangeApproaches} />
                </label>
                <Space className={styles['labels-right']}>
                    <label>
                        <div className={styles['label-exericise']}>
                            {TrainingFormExerciseConfig.LABEL_WEIGHT}
                        </div>
                        <InputNumber value={weight} onChange={onChangeWeight} />
                    </label>
                    <div>x</div>
                    <label>
                        <div className={styles['label-exericise']}>
                            {TrainingFormExerciseConfig.LABEL_APPROACHES}
                        </div>
                        <InputNumber value={replays} onChange={onChangeReplays} />
                    </label>
                </Space>
            </Space>
        </div>
    );
}
