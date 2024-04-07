import { Checkbox, Col, DatePicker, Row, Select } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import moment, { Moment } from 'moment';

import { SelectOptions } from '@features/traning/model/types';
import { TrainingFormExerciseConfig } from '@features/traning/config';

import {
    selectCreateTraining,
    selectPal,
    selectTraining,
    trainingActions,
} from '@entities/training';

import { DataTestIdConfig, DateFormatConfig, LayoutConfig, locale } from '@shared/config';
import {
    formatDate,
    getPeriodFindNumber,
    getPeriodFindTitle,
    getPeriodTitles,
    isOldDate,
} from '@shared/lib';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { COL, Gap } from '@shared/config/constants';

import styles from './app-period-ecercise.module.less';

type AppPeriodExerciseProps = {
    selectOptions: SelectOptions[];
    onSelectTraining: (value: string) => void;
    selectTrainingName?: string;
};

export function AppPeriodExercise({
    selectTrainingName,
    selectOptions,
    onSelectTraining,
}: AppPeriodExerciseProps) {
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

    return (
        <div className={styles['period-exercise']}>
            {!isSelect && (
                <Select
                    data-test-id={DataTestIdConfig.MODAL_CREATE_EXERCISE_SELECT}
                    className={styles.select}
                    placeholder={LayoutConfig.TITLE_MODAL_CHANGE_EXERCISE}
                    value={selectTrainingName ? selectTrainingName : undefined}
                    options={selectOptions}
                    onChange={onSelectTraining}
                />
            )}
            <Row gutter={Gap.GAP_M} className={styles['data-picker-wrapper']}>
                <Col span={Gap.GAP_S}>
                    <DatePicker
                        data-test-id={DataTestIdConfig.MODAL_DRAWER_RIGHT_DATE_PICKER}
                        size='small'
                        disabledDate={handlerDateDisables}
                        locale={locale}
                        dateRender={dateCellRender}
                        format={DateFormatConfig.FORMAT_DD_MN_YYYY_DOT}
                        onChange={handlerChangeDate}
                        value={date}
                    />
                </Col>
                <Col span={Gap.GAP_S}>
                    <Checkbox
                        data-test-id={DataTestIdConfig.MODAL_DRAWER_RIGHT_CHECKBOX_PERIOD}
                        checked={createTraining.parameters?.repeat}
                        onChange={handlerChangeRepeat}
                    >
                        {TrainingFormExerciseConfig.CHECKBOX_PERIOD_LABEL}
                    </Checkbox>
                </Col>
                <Col span={COL.COL_S} className={styles['select-period']}>
                    {isRepeat && (
                        <Select
                            data-test-id={DataTestIdConfig.MODAL_DRAWER_RIGHT_SELECT_PERIOD}
                            className={styles.select}
                            placeholder={TrainingFormExerciseConfig.SELECT_OPTION_PERIOD_DEFAULT}
                            value={getPeriodFindNumber(createTraining.parameters?.period)}
                            options={getPeriodTitles()}
                            onChange={handlerSelectPeriod}
                        />
                    )}
                </Col>
            </Row>
        </div>
    );
}
