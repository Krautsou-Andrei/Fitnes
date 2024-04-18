import { Checkbox, Col, DatePicker, Row, Select } from 'antd';

import { useAppPeriodExercises } from '@features/traning/hooks';
import { SelectOptions } from '@features/traning/model/types';
import { TrainingFormExerciseConfig } from '@features/traning/config';

import { DataTestIdConfig, DateFormatConfig, LayoutConfig, locale } from '@shared/config';
import { getPeriodFindNumber, getPeriodTitles } from '@shared/lib';
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
    const { state, functions } = useAppPeriodExercises({
        styles: styles,
        onSelectTraining: onSelectTraining,
    });

    return (
        <div className={styles['period-exercise']}>
            {!state.isSelect && (
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
                        disabledDate={functions.handlerDateDisables}
                        locale={locale}
                        dateRender={functions.dateCellRender}
                        format={DateFormatConfig.FORMAT_DD_MN_YYYY_DOT}
                        onChange={functions.handlerChangeDate}
                        value={state.date}
                    />
                </Col>
                <Col span={Gap.GAP_S}>
                    <Checkbox
                        data-test-id={DataTestIdConfig.MODAL_DRAWER_RIGHT_CHECKBOX_PERIOD}
                        checked={state.createTraining.parameters?.repeat}
                        onChange={functions.handlerChangeRepeat}
                    >
                        {TrainingFormExerciseConfig.CHECKBOX_PERIOD_LABEL}
                    </Checkbox>
                </Col>
                <Col span={COL.COL_S} className={styles['select-period']}>
                    {state.isRepeat && (
                        <Select
                            data-test-id={DataTestIdConfig.MODAL_DRAWER_RIGHT_SELECT_PERIOD}
                            className={styles.select}
                            placeholder={TrainingFormExerciseConfig.SELECT_OPTION_PERIOD_DEFAULT}
                            value={getPeriodFindNumber(state.createTraining.parameters?.period)}
                            options={getPeriodTitles()}
                            onChange={functions.handlerSelectPeriod}
                        />
                    )}
                </Col>
            </Row>
        </div>
    );
}
