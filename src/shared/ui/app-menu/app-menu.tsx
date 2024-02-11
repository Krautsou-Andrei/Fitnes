import React from 'react';
import clsn from 'classnames';
import { Menu } from 'antd';

import { MenuConfig } from '@shared/config';

import styles from './app-menu.module.less';

type Props = {
    collapsed: boolean;
    isTablet?: boolean;
};

export function AppMenu({ collapsed, isTablet }: Props) {
    return (
        <Menu
            className={clsn(styles['app-menu'])}
            theme='light'
            mode='inline'
            items={MenuConfig.map((item) => ({
                key: String(item.id),
                icon: isTablet ? null : React.createElement(item.icon),
                label: `${item.title}`,
                style: collapsed
                    ? { paddingLeft: 'calc(50% - 16px / 2)' }
                    : {
                          paddingLeft: !isTablet ? '16px' : '8px',
                          paddingRight: isTablet ? '8px' : undefined,
                      },
            }))}
            inlineCollapsed={collapsed}
        />
    );
}
