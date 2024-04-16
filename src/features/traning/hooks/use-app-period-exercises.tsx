import moment, { Moment } from 'moment';

import {
    selectCreateTraining,
    selectPal,
    selectTraining,
    trainingActions,
} from '@entities/training';

import { DateFormatConfig } from '@shared/config';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { formatDate, getPeriodFindTitle, isOldDate } from '@shared/lib';

type UseAppPeeriodExercisesParams = {
    styles: { [key: string]: string };
    onSelectTraining: (value: string) => void;
};

export function useAppPeriodExercises({ styles, onSelectTraining }: UseAppPeeriodExercisesParams) {
    const dispatch = useAppDispatch();
    const trainings = useAppSelector(selectTraining);
    const createTraining = useAppSelector(selectCreateTraining);
    const isSelect = Boolean(useAppSelector(selectPal));

    const isRepeat = createTraining.parameters?.repeat;
    const date = createTraining.date ? moment(createTraining.date) : undefined;

    const dateCellRender = (date: Moment) => {
        const selectDate = date.format(DateFormatConfig.FORMAT_YYYY_MM_DD_DASHED);

        const trainingsDay = trainings.filter((item) => item.date === selectDate);

        if (trainingsDay.length) {
            return <div className={styles['is-training']}>{date.date()}</div>;
        }

        return date.date();
    };

    const handlerChangeRepeat = (event: CheckboxChangeEvent) => {
        dispatch(
            trainingActions.setCreateTrainingParametrs({ period: 0, repeat: event.target.checked }),
        );
    };

    const handlerSelectPeriod = (value: string) => {
        dispatch(
            trainingActions.setCreateTrainingParametrs({
                period: getPeriodFindTitle(value),
            }),
        );
    };

    const handlerDateDisables = (date: Moment) => {
        return isOldDate(date);
    };

    const handlerChangeDate = (date: Moment | null) => {
        if (date) {
            dispatch(trainingActions.setCreateTrainingDate(date.toISOString()));
            const currentDate = formatDate(date, DateFormatConfig.FORMAT_YYYY_MM_DD_DASHED);

            const isSearchtraining = Boolean(
                trainings.find(
                    (training) =>
                        training.date === currentDate &&
                        training.training.name === createTraining.name,
                ),
            );

            if (isSearchtraining) {
                dispatch(trainingActions.setCreateTrainingName(''));
                onSelectTraining('');
            }
        }
    };

    return {
        state: {
            createTraining,
            date,
            isRepeat,
            isSelect,
        },
        functions: {
            dateCellRender,
            handlerChangeRepeat,
            handlerSelectPeriod,
            handlerDateDisables,
            handlerChangeDate,
        },
    };
}
