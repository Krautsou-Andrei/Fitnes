import { useState } from 'react';
import { RadioChangeEvent } from 'antd';
import moment from 'moment';
import { TrainingsAchievementsDay } from '../model/types';
import { filtersAchievements } from '../lib';

import { selectTraining, selectTrainingName } from '@entities/training';

import { AchievementsDefaultConfig, AchievementsKeyConfig, DateFormatConfig } from '@shared/config';
import { useAppMediaQuery, useAppSelector } from '@shared/hooks';

type UseAppAchievements = {
    days: number;
};

export function useAppAchievements({ days }: UseAppAchievements) {
    const { isQueryXL, isTablet, isQueryXS } = useAppMediaQuery();
    const trainingNames = useAppSelector(selectTrainingName);
    const trainings = useAppSelector(selectTraining);

    const [selectFilter, setSelectFilter] = useState<string>(
        AchievementsKeyConfig.BUTTON_VALUE_ALL,
    );

    let currentDay = moment();

    if (days === AchievementsDefaultConfig.NUMBERS_DAYS_MONTH) {
        const firstDay = moment().subtract(days, 'days').day();

        if (firstDay !== 0) {
            currentDay = currentDay.add(
                AchievementsDefaultConfig.NUMBERS_DAYS_WEEK - firstDay,
                'days',
            );
        }
    }

    const weekDays = Array.from({ length: days }, (_, i) =>
        currentDay.clone().subtract(i, 'days').format(DateFormatConfig.FORMAT_YYYY_MM_DD_DASHED),
    ).reverse();

    const result: TrainingsAchievementsDay = {};

    weekDays.forEach((day) => {
        result[day] = [];
        trainings.forEach((training) => {
            if (training.date === day) {
                result[day] = [...result[day], training];
            }
        });
    });

    const {
        bestNameExercise,
        bestExercisesDaysArray,
        bestNameTraining,
        bestExercisesPeriod,
        filterTrainings,
        filterTrainingsMonth,
        infoTrainings,
        isEmptyTraining,
    } = filtersAchievements({
        trainings: result,
        filter: selectFilter,
        quantityDays: days,
    });

    const handleChangeRadio = (event: RadioChangeEvent) => {
        setSelectFilter(event.target.value);
    };

    return {
        state: {
            bestNameExercise,
            bestExercisesDaysArray,
            bestNameTraining,
            bestExercisesPeriod,
            filterTrainings,
            filterTrainingsMonth,
            infoTrainings,
            isEmptyTraining,
            isQueryXL,
            isQueryXS,
            isTablet,
            selectFilter,
            trainings,
            trainingNames,
        },
        functions: {
            handleChangeRadio,
        },
    };
}
