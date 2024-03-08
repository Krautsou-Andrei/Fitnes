import { useState } from 'react';
import { Calendar } from 'antd';
import { Moment } from 'moment';
import { Content } from 'antd/lib/layout/layout';

import { useTraningPage } from '../hooks';
import { locale } from '../config';

import { TrainingModal } from '@features/traning';

import { trainingActions } from '@entities/training';

import { AppPortal } from '@shared/ui';
import { formatDate } from '@shared/lib';
import { DateFormatConfig } from '@shared/config';
import { useAppDispatch } from '@shared/hooks';

import styles from './training-page.module.less';

export function TrainingPage() {
    const dispatch = useAppDispatch();
    const { listNameTraining, trainings } = useTraningPage();
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [targetCell, setTargetCell] = useState<HTMLElement | null>(null);

    const onChangeCell = (date: Moment) => {
        const chankSelector = formatDate(date, DateFormatConfig.FORMAT_YYYY_MM_DD_DASHED);
        const element = document.querySelector(`[title*="${chankSelector}"]`) as HTMLElement | null;
        const cellDate = formatDate(date, DateFormatConfig.FORMAT_DD_MN_YYYY_DOT);
        const trainingDate = date.toISOString();

        setSelectedDate(cellDate);
        setTargetCell(element);

        dispatch(trainingActions.setCreateTrainingDate(trainingDate));
    };

    const onCloseAddTraining = () => {
        setTargetCell(null);
    };

    const cellRender = (date: Moment) => {
        const selectDate = formatDate(date, DateFormatConfig.FORMAT_YYYY_MM_DD_DASHED);
        const training = trainings.find((item) => item.date === selectDate);

        return <div>{training?.date} </div>;
    };

    return (
        <Content className={styles['traning-page']}>
            <Calendar locale={locale} onSelect={onChangeCell} dateCellRender={cellRender} />
            {targetCell && (
                <AppPortal container={targetCell}>
                    <TrainingModal
                        date={selectedDate}
                        listTraining={listNameTraining}
                        onCloseAddTraining={onCloseAddTraining}
                    />
                </AppPortal>
            )}
        </Content>
    );
}
