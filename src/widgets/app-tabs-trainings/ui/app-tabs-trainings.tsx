import clsn from 'classnames';

import { useAppTabsTrainings } from '../hooks';

import { AppTabs } from '@shared/ui';

import styles from './app-tabs-trainings.module.less';

type AppTabsTrainingsProps = {
    classNames?: string;
    isBadge?: boolean;
    onChangeTab?: (key: string) => void;
};

export function AppTabsTrainings({ classNames, isBadge, onChangeTab }: AppTabsTrainingsProps) {
    const { state } = useAppTabsTrainings();

    return (
        <AppTabs
            items={state.tabs}
            isBadge={isBadge}
            onChange={onChangeTab}
            className={clsn(styles['tabs-my-trainings'], classNames)}
        />
    );
}
