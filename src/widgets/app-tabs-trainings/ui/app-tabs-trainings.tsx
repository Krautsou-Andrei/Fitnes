import clsn from 'classnames';

import { trainingsTabsConfig } from '../config/trainings-tabs-config';
import { AppTabs } from '@shared/ui';

import styles from './app-tabs-trainings.module.less';

type AppTabsTrainingsProps = {
    classNames?: string;
    onChangeTab?: (key: string) => void;
};

export function AppTabsTrainings({ classNames, onChangeTab }: AppTabsTrainingsProps) {
    return (
        <AppTabs
            items={trainingsTabsConfig}
            onChange={onChangeTab}
            className={clsn(styles['tabs-my-trainings'], classNames)}
        />
    );
}
