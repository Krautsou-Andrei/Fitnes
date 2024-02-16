import { useLocation, useNavigate } from 'react-router-dom';
import clsn from 'classnames';
import { Tabs } from 'antd';
import { ItemsTabs } from './model/types';

import styles from './app-tabs.module.less';

type AppTabsProps = {
    className?: string;
    items: ItemsTabs[];
};

export function AppTabs({ className, items }: AppTabsProps) {
    const { pathname } = useLocation();
    const navigation = useNavigate();

    const onTabClick = (activeKey: string) => {
        if (pathname !== activeKey) {
            navigation(activeKey);
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
