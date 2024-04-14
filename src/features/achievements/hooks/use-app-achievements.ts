import { useState } from 'react';
import { RadioChangeEvent } from 'antd';
import moment from 'moment';
import { TrainingsAchievementsDay } from '../model/types';
import { filtersAchievements } from '../lib';

import { selectAchievementsType, selectTraining, selectTrainingName } from '@entities/training';

import { AchievementsDefaultConfig, DateFormatConfig } from '@shared/config';
import { useAppSelector } from '@shared/hooks';

export function useAppAchievements() {
    const trainingNames = useAppSelector(selectTrainingName);
    const trainings = useAppSelector(selectTraining);
    const achievementsNumber = useAppSelector(selectAchievementsType);

    const [selectFilter, setSelectFilter] = useState<string>(
        AchievementsDefaultConfig.BUTTON_VALUE_ALL,
    );

    const currentDay = moment();
    const numberDays = achievementsNumber
        ? achievementsNumber
        : AchievementsDefaultConfig.NUMBERS_DAYS_WEEK;

    const weekDays = Array.from({ length: numberDays }, (_, i) =>
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
        infoTrainings,
    } = filtersAchievements({
        trainings: result,
        filter: selectFilter,
        quantityDays: numberDays,
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
            infoTrainings,
            selectFilter,
            trainings,
            trainingNames,
        },
        functions: {
            handleChangeRadio,
        },
    };
}
