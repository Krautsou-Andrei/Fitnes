import clsn from 'classnames';
import { Menu } from 'antd';

import { menuConfig } from './config/menu-config';
import { AppBadgeCount } from '../app-badge-count/app-badge-count';

import { PathConfig } from '@shared/config';
import { useLinkMenuClick } from '@shared/hooks';

import styles from './app-menu.module.less';

type AppMenuProps = {
    isCollapsed: boolean;
    isQueryMD?: boolean;
    closeMenu?: () => void;
};

export function AppMenu({ isCollapsed, isQueryMD, closeMenu }: AppMenuProps) {
    const { onClick } = useLinkMenuClick();

    const onClickMenu = (link: string) => {
        onClick(link);
        if (closeMenu) {
            closeMenu();
        }
    };

    return (
        <Menu
            className={clsn(styles['app-menu'])}
            theme='light'
            mode='inline'
            items={menuConfig.map((item) => ({
                key: String(item.id),
                icon: isQueryMD ? null : item.link === PathConfig.TRAINING ? (
                    <AppBadgeCount icon={item.icon} />
                ) : (
                    item.icon
                ),
                label: `${item.title}`,
                onClick: () => onClickMenu(item.link),
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
