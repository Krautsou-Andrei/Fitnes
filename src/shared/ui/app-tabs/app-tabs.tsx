import { useLocation } from 'react-router-dom';
import clsn from 'classnames';
import { Tabs } from 'antd';
import { push } from 'redux-first-history';

import { ItemsTabs } from './model/types';
import { useAppDispatch } from '@shared/hooks';

import styles from './app-tabs.module.less';

type AppTabsProps = {
    className?: string;
    items: ItemsTabs[];
};

export function AppTabs({ className, items }: AppTabsProps) {
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();

    const onTabClick = (activeKey: string) => {
        if (pathname !== activeKey) {
            dispatch(push(activeKey));
        }
    };

    return (
        <Tabs
            defaultActiveKey={pathname}
            centered
            className={clsn(styles.tabs, className)}
            onTabClick={onTabClick}
        >
            {items.map((tab) => (
                <Tabs.TabPane tab={tab.tab} key={tab.key} />
            ))}
        </Tabs>
    );
}
