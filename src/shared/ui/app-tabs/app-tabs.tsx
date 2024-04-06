import clsn from 'classnames';
import { Badge, Tabs } from 'antd';

import { useAppTabs } from './hooks/useAppTabs';

import { ItemsTabs } from './model/types';

import styles from './app-tabs.module.less';

type AppTabsProps = {
    items: ItemsTabs[];
    className?: string;
    onChange?: (key: string) => void;
};

export function AppTabs({ className, items, onChange }: AppTabsProps) {
    const { countInvities, pathname, onTabClick } = useAppTabs();

    return (
        <Tabs
            defaultActiveKey={pathname}
            centered
            className={clsn(styles.tabs, className)}
            onTabClick={onChange ? undefined : onTabClick}
            onChange={onChange}
            items={items.map((tab) => {
                if (tab.badge && countInvities !== 0) {
                    return {
                        label: (
                            <div>
                                {tab.label}
                                <Badge count={countInvities} />
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
