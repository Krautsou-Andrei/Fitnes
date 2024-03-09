import { useState } from 'react';
import { Calendar } from 'antd';
import { Moment } from 'moment';
import { Content } from 'antd/lib/layout/layout';

import { useTraningPage } from '../hooks';
import { locale } from '../config';
import { TrainingDay } from './training-day';

import { TrainingModal } from '@features/traning';

import { TrainingType, trainingActions } from '@entities/training';

import { AppPortal } from '@shared/ui';
import { formatDate, offSet } from '@shared/lib';
import { DateFormatConfig, Width } from '@shared/config';
import { useAppDispatch } from '@shared/hooks';

import styles from './training-page.module.less';

export function TrainingPage() {
    const dispatch = useAppDispatch();
    const { listNameTraining, trainings } = useTraningPage();
    const [selectedDate, setSelectedDate] = useState<string | Moment>('');
    const [selectedTraininsgDay, setSelectedTrainingsDay] = useState<TrainingType[]>([]);
    const [targetCell, setTargetCell] = useState<HTMLElement | null>(null);
    const [isOffSet, setIsOffSet] = useState(false);

    const onChangeCell = (date: Moment) => {
        const chankSelector = formatDate(date, DateFormatConfig.FORMAT_YYYY_MM_DD_DASHED);
        const element = document.querySelector(`[title*="${chankSelector}"]`) as HTMLElement | null;
        const trainingDate = date.toISOString();
        const trainingsDay = trainings
            .filter((item) => item.date === chankSelector)
            .map((item) => item.training);

        if (element) {
            setIsOffSet(offSet(element, Width.TRAINING_MODAL));
        }

        setSelectedDate(date);
        setSelectedTrainingsDay(trainingsDay);
        setTargetCell(element);

        dispatch(trainingActions.setCreateTrainingDate(trainingDate));
    };

    const onCloseAddTraining = () => {
        setTargetCell(null);
    };

    const cellRender = (date: Moment) => {
        const selectDate = formatDate(date, DateFormatConfig.FORMAT_YYYY_MM_DD_DASHED);
        const trainingsDay = trainings.filter((item) => item.date === selectDate);

        return trainingsDay?.map((item) => (
            <TrainingDay key={item.training.id} name={item.training.name} />
        ));
    };

    return (
        <Content className={styles['traning-page']}>
            <Calendar locale={locale} onSelect={onChangeCell} dateCellRender={cellRender} />
            {targetCell && (
                <AppPortal container={targetCell}>
                    <TrainingModal
                        date={selectedDate}
                        isOffSet={isOffSet}
                        listTraining={listNameTraining}
                        onCloseAddTraining={onCloseAddTraining}
                        trainingsDay={selectedTraininsgDay}
                    />
                </AppPortal>
            )}
        </Content>
    );
}
