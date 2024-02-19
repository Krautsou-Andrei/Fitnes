import clsn from 'classnames';
import { Button } from 'antd';

import { AppIcon } from '@shared/ui';
import { LayoutConfig } from '@shared/config';

import styles from './app-button-logout.module.less';
import { useAppDispatch } from '@shared/hooks';
import { logoutThunk } from '@features/logout/model/logout';

type Props = {
    isCollapsed: boolean;
    isQueryMD: boolean;
};

export function AppButtonLogout({ isCollapsed, isQueryMD }: Props) {
    const dispatch = useAppDispatch();
    const onClick = () => {
        dispatch(logoutThunk())
            .unwrap()
            .catch((error: Error) => console.log('logout', error));
    };

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
