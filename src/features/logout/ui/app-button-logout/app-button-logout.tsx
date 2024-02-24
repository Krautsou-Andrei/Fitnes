import clsn from 'classnames';
import { Button } from 'antd';

import { useAppButtonLogout } from './lib/use-app-button-logout';

import { AppIcon } from '@shared/ui';
import { LayoutConfig } from '@shared/config';

import styles from './app-button-logout.module.less';

type AppButtonLogoutProps = {
    isCollapsed: boolean;
    isQueryMD: boolean;
};

export function AppButtonLogout({ isCollapsed, isQueryMD }: AppButtonLogoutProps) {
    const { onClick } = useAppButtonLogout();

    return (
        <Button
            block
            className={clsn(styles['profile-button'], {
                [styles['profile-button--collapsed']]: isCollapsed,
            })}
            onClick={onClick}
        >
            {!isQueryMD && <AppIcon name='app/exit' width={16} height={16} />}
            {!isCollapsed && LayoutConfig.EXIT}
        </Button>
    );
}
