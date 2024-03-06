import clsn from 'classnames';
import { Menu } from 'antd';

import { useLinkMenuClick } from '@shared/hooks';
import { menuConfig } from './config/menu-config';

import styles from './app-menu.module.less';

type AppMenuProps = {
    isCollapsed: boolean;
    isQueryMD?: boolean;
};

export function AppMenu({ isCollapsed, isQueryMD }: AppMenuProps) {
    const { onClick } = useLinkMenuClick();

    return (
        <Menu
            className={clsn(styles['app-menu'])}
            theme='light'
            mode='inline'
            items={menuConfig.map((item) => ({
                key: String(item.id),
                icon: isQueryMD ? null : item.icon,
                label: `${item.title}`,
                onClick: () => onClick(item.link),
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
