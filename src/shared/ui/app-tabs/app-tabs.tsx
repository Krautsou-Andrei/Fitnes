import clsn from 'classnames';
import { Tabs } from 'antd';

import { useAppTabs } from './lib/useAppTabs';

import { ItemsTabs } from './model/types';

import styles from './app-tabs.module.less';

type AppTabsProps = {
    className?: string;
    items: ItemsTabs[];
};

export function AppTabs({ className, items }: AppTabsProps) {
    const { pathname, onTabClick } = useAppTabs();

    return (
        <Tabs
            defaultActiveKey={pathname}
            centered
            className={clsn(styles.tabs, className)}
            onTabClick={onTabClick}
            items={items.map((tab) => ({
                label: tab.tab,
                key: tab.key,
            }))}
        />
    );
}
