import clsn from 'classnames';

import { trainingsTabsConfig } from '../config/trainings-tabs-config';
import { AppTabs } from '@shared/ui';

import styles from './app-tabs-trainings.module.less';

type AppTabsTrainingsProps = {
    classNames: string;
};

export function AppTabsTrainings({ classNames }: AppTabsTrainingsProps) {
    const onChange = (key: string) => {
        console.log('event', key);
    };
    return (
        <AppTabs
            items={trainingsTabsConfig}
            onChange={onChange}
            className={clsn(styles['tabs-my-trainings'], classNames)}
        />
    );
}
