import { useCallback, useEffect, useRef, useState } from 'react';
import moment, { type Moment } from 'moment';

import { getTraningListThunk } from '@features/traning';

import {
    type TrainingType,
    selectTraining,
    selectTrainingName,
    trainingActions,
} from '@entities/training';

import { useAppDispatch, useAppMediaQuery, useAppSelector } from '@shared/hooks';
import { calendarSelectedDay, formatDate, offSet, showErrorForDevelop } from '@shared/lib';
import { DateFormatConfig, Width } from '@shared/config';
import { AppTrainingDay } from '@shared/ui';
import { AppDesctopDay } from '../ui/app-desctop-day';

export function useTraningPage() {
    const { isQueryXS } = useAppMediaQuery();

    const trainings = useAppSelector(selectTraining);
    const listNameTraining = useAppSelector(selectTrainingName);

    const dispatch = useAppDispatch();

    const [selectedDate, setSelectedDate] = useState<string | Moment>('');
    const [selectedTraininsgDay, setSelectedTrainingsDay] = useState<TrainingType[]>([]);
    const [targetCell, setTargetCell] = useState<HTMLElement | null>(null);
    const [isOffSet, setIsOffSet] = useState(false);

    const month = useRef(false);

    useEffect(() => {
        dispatch(getTraningListThunk()).catch((error: unknown) => {
            showErrorForDevelop('Get training list', error);
        });
    }, [dispatch]);

    const onPanelChange = (_date: Moment, mode: string) => {
        if (mode === 'month' && isQueryXS) {
            month.current = true;
        }
    };

    const onChangeCell = useCallback(
        (date: Moment) => {
            const chankSelector = formatDate(date, DateFormatConfig.FORMAT_YYYY_MM_DD_DASHED);
            const element = document.querySelector(
                `[title*="${chankSelector}"]`,
            ) as HTMLElement | null;

            const trainingsDay = trainings
                .filter((item) => item.date === chankSelector)
                .map((item) => item.training);

            if (element) {
                setIsOffSet(offSet(element, Width.TRAINING_MODAL));
                calendarSelectedDay(element);
            }

            setSelectedDate(date);
            setSelectedTrainingsDay(trainingsDay);

            if (!month.current) {
                setTargetCell(element);
            } else {
                month.current = false;
                setTargetCell(null);
            }

            dispatch(trainingActions.clearCreateTraining());
        },
        [dispatch, trainings],
    );

    const onCloseAddTraining = () => {
        setTargetCell(null);
        dispatch(trainingActions.clearCreateTraining());
    };

    const handleFullCellRender = (date: Moment) => {
        const selectDate = formatDate(date, DateFormatConfig.FORMAT_YYYY_MM_DD_DASHED);
        const trainingsDay = trainings.filter((item) => item.date === selectDate);
        const isToday = moment().isSame(date, 'day');

        return (
            <AppDesctopDay
                date={date}
                isToday={isToday}
                onChangeCell={onChangeCell}
                trainingsDay={trainingsDay}
            />
        );
    };

    const handleCellRender = (date: Moment) => {
        const selectDate = formatDate(date, DateFormatConfig.FORMAT_YYYY_MM_DD_DASHED);
        const trainingsDay = trainings.filter((item) => item.date === selectDate);

        return trainingsDay?.map((item) => (
            <AppTrainingDay
                key={item.training.id}
                name={item.training.name}
                isImplementation={item.training.isImplementation}
            />
        ));
    };

    useEffect(() => {
        if (targetCell) {
            onChangeCell(selectedDate as Moment);
        }
    }, [onChangeCell, selectedDate, targetCell]);

    return {
        isQueryXS,
        isOffSet,
        handleCellRender,
        handleFullCellRender,
        listNameTraining,
        onChangeCell,
        onCloseAddTraining,
        onPanelChange,
        selectedDate,
        selectedTraininsgDay,
        trainings,
        targetCell,
    };
}
