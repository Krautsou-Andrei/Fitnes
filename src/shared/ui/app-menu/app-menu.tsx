import clsn from 'classnames';
import { Menu } from 'antd';

import { MenuConfig } from './config/menu-config';

import styles from './app-menu.module.less';

type Props = {
    isCollapsed: boolean;
    isQueryMD?: boolean;
};

export function AppMenu({ isCollapsed, isQueryMD }: Props) {
    return (
        <Menu
            className={clsn(styles['app-menu'])}
            theme='light'
            mode='inline'
            items={MenuConfig.map((item) => ({
                key: String(item.id),
                icon: isQueryMD ? null : item.icon,
                label: `${item.title}`,
                style: isCollapsed
                    ? { paddingLeft: 'calc(50% - 16px / 2)' }
                    : {
                          paddingLeft: !isQueryMD ? '16px' : '8px',
                          paddingRight: isQueryMD ? '8px' : undefined,
                      },
            }))}
            inlineCollapsed={isCollapsed}
        />
    );
}
