import { Calendar } from 'antd';
import { Moment } from 'moment';
import { Content } from 'antd/lib/layout/layout';

import { useTraningPage } from '../hooks';

import { TrainingModal } from '@features/traning';

import { AppPortal } from '@shared/ui';
import { offSetTop } from '@shared/lib';
import { locale } from '@shared/config';

import styles from './training-page.module.less';

export function TrainingPage() {
    const {
        isQueryXS,
        isOffSet,
        handleCellRender,
        handleFullCellRender,
        listNameTraining,
        onPanelChange,
        onChangeCell,
        onCloseAddTraining,
        selectedDate,
        selectedTraininsgDay,
        targetCell,
    } = useTraningPage();

    return (
        <Content className={!isQueryXS ? styles['traning-page'] : styles['traning-page-mobile']}>
            <Calendar
                fullscreen={!isQueryXS}
                dateFullCellRender={!isQueryXS ? handleFullCellRender : undefined}
                locale={locale}
                dateCellRender={isQueryXS ? handleCellRender : undefined}
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
