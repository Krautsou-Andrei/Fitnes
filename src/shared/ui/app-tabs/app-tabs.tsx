import clsn from 'classnames';
import { Badge, Tabs } from 'antd';

import { useAppTabs } from './hooks/useAppTabs';

import { ItemsTabs } from './model/types';

import styles from './app-tabs.module.less';

type AppTabsProps = {
    items: ItemsTabs[];
    activeKey?: string;
    className?: string;
    isBadge?: boolean;
    onChange?: (key: string) => void;
};

export function AppTabs({ items, activeKey, className, isBadge, onChange }: AppTabsProps) {
    const { countInvities, isMaxPartners, pathname, onTabClick } = useAppTabs();

    return (
        <Tabs
            destroyInactiveTabPane={true}
            accessKey={activeKey ? activeKey : pathname}
            centered
            className={clsn(styles.tabs, className)}
            onTabClick={onChange ? undefined : onTabClick}
            onChange={onChange}
            items={items.map((tab) => {
                if (tab.badge && countInvities !== 0 && isBadge) {
                    return {
                        label: (
                            <div>
                                {tab.label}
                                {!isMaxPartners && (
                                    <Badge count={countInvities} className={styles.badge} />
                                )}
                            </div>
                        ),
                        key: `${tab.key}-${countInvities + 1}`,
                        children: tab.children,
                    };
                }

                return tab;
            })}
        />
    );
}
