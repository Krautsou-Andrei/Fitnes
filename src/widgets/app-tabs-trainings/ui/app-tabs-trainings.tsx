import clsn from 'classnames';

import { useAppTabsTrainings } from '../hooks';

import { AppTabs } from '@shared/ui';

import styles from './app-tabs-trainings.module.less';

type AppTabsTrainingsProps = {
    activeKey?: string;
    classNames?: string;
    isBadge?: boolean;
    onChangeTab?: (key: string) => void;
};

export function AppTabsTrainings({
    activeKey,
    classNames,
    isBadge,
    onChangeTab,
}: AppTabsTrainingsProps) {
    const { state } = useAppTabsTrainings();

    return (
        <AppTabs
            items={state.tabs}
            isBadge={isBadge}
            activeKey={activeKey}
            onChange={onChangeTab}
            className={clsn(styles['tabs-my-trainings'], classNames)}
        />
    );
}
