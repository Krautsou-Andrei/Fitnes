import { Tabs } from 'antd';
import { ItemsTabs } from './model/types';

import styles from './app-tabs.module.less';

type AppTabsProps = {
    activeTab: string;
    items: ItemsTabs[];
};

export function AppTabs({ activeTab, items }: AppTabsProps) {
    return (
        <Tabs defaultActiveKey={activeTab} centered className={styles.tabs}>
            {items.map((tab) => (
                <Tabs.TabPane tab={tab.tab} key={tab.key} />
            ))}
        </Tabs>
    );
}
