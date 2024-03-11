import { useCallback, useEffect, useRef, useState } from 'react';
import clsn from 'classnames';
import { Calendar } from 'antd';
import moment, { Moment } from 'moment';
import { Content } from 'antd/lib/layout/layout';

import { useTraningPage } from '../hooks';
import { locale } from '../config';

import { TrainingModal } from '@features/traning';

import { TrainingType, trainingActions } from '@entities/training';

import { AppPortal, AppTrainingDay } from '@shared/ui';
import { formatDate, offSet, offSetTop } from '@shared/lib';
import { DateFormatConfig, Width } from '@shared/config';
import { useAppDispatch, useAppMediaQuery } from '@shared/hooks';

import styles from './training-page.module.less';

export function TrainingPage() {
    const dispatch = useAppDispatch();
    const { listNameTraining, trainings } = useTraningPage();
    const { isQueryXS } = useAppMediaQuery();

    const [selectedDate, setSelectedDate] = useState<string | Moment>('');
    const [selectedTraininsgDay, setSelectedTrainingsDay] = useState<TrainingType[]>([]);
    const [targetCell, setTargetCell] = useState<HTMLElement | null>(null);
    const [isOffSet, setIsOffSet] = useState(false);

    const month = useRef(false);

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
            }

            document.querySelectorAll('.ant-picker-cell').forEach((cell) => {
                if (cell.getAttribute('title') === element?.getAttribute('title')) {
                    cell.classList.add('ant-picker-cell-selected');
                    return;
                }
                cell.classList.remove('ant-picker-cell-selected');
            });

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
            <div
                className={clsn('ant-picker-cell-inner ant-picker-calendar-date', {
                    ['ant-picker-calendar-date-today']: isToday,
                })}
                onClick={(e) => {
                    e.stopPropagation();
                    onChangeCell(date);
                }}
            >
                <div className='ant-picker-calendar-date-value'>
                    {date.date().toString().padStart(2, '0')}
                </div>
                <div className='ant-picker-calendar-date-content'>
                    {trainingsDay?.map((item) => (
                        <AppTrainingDay
                            key={item.training.id}
                            name={item.training.name}
                            isImplementation={item.training.isImplementation}
                        />
                    ))}
                </div>
            </div>
        );
    };

    const cellRender = (date: Moment) => {
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

    return (
        <Content className={!isQueryXS ? styles['traning-page'] : ''}>
            <Calendar
                fullscreen={!isQueryXS}
                dateFullCellRender={!isQueryXS ? handleFullCellRender : undefined}
                locale={locale}
                dateCellRender={isQueryXS ? cellRender : undefined}
                onSelect={onChangeCell}
                onPanelChange={onPanelChange}
            />
            {targetCell && (
                <AppPortal container={targetCell}>
                    <TrainingModal
                        date={selectedDate as Moment}
                        isOffSet={isOffSet}
                        offSetTop={isQueryXS ? offSetTop(targetCell) : undefined}
                        listTraining={listNameTraining}
                        onCloseAddTraining={onCloseAddTraining}
                        trainingsDay={selectedTraininsgDay}
                    />
                </AppPortal>
            )}
        </Content>
    );
}
