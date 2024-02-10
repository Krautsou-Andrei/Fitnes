import React from 'react';
import { Menu } from 'antd';

import { MenuConfig } from '@shared/config';

import styles from './app-menu.module.less';

type Props = {
    collapsed: boolean;
};

export function AppMenu({ collapsed }: Props) {
    return (
        <Menu
            className={styles['app-menu']}
            theme='light'
            mode='inline'
            items={MenuConfig.map((item) => ({
                key: String(item.id),
                icon: React.createElement(item.icon),
                label: `${item.title}`,
                style: collapsed
                    ? { paddingLeft: 'calc(50% - 16px / 2)' }
                    : { paddingLeft: '16px' },
            }))}
            inlineCollapsed={collapsed}
        />
    );
}
