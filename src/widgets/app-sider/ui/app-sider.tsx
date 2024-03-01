import { useEffect, useState } from 'react';
import clsn from 'classnames';
import { Divider } from 'antd';
import Sider from 'antd/lib/layout/Sider';

import { useSiderMediaQuery } from '../lib/use-sider-media-query';
import { siderActions } from '../model/slice';
import { AppButtonSwitch } from './button-switch';

import { AppButtonLogout } from '@features/logout';

import { AppMenu } from '@shared/ui';
import { AppIcon } from '@shared/ui/';
import { useAppDispatch } from '@shared/hooks';

import styles from './app-sider.module.less';

export function AppSider() {
    const { isQueryMD, width, widthCollapsed } = useSiderMediaQuery();
    const [isCollapsed, isSetCollapsed] = useState(isQueryMD ? true : false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(siderActions.setIsCollapsed(isCollapsed));
    }, [dispatch, isCollapsed]);

    return (
        <Sider
            className={styles['app-sider']}
            breakpoint='md'
            collapsedWidth={widthCollapsed}
            width={width}
            theme='light'
            trigger={null}
            collapsible
            collapsed={isCollapsed}
        >
            <AppIcon
                name={`${isCollapsed ? 'layout/logo-smal' : 'layout/logo-big'}`}
                className={clsn(styles.logo, { [styles['logo--collapsed']]: isCollapsed })}
                width={isCollapsed ? 28 : isQueryMD ? 72 : 133}
                height={isQueryMD ? 18 : 43}
            />
            <AppMenu isCollapsed={isCollapsed} isQueryMD={isQueryMD} />
            <AppButtonSwitch isCollapsed={isCollapsed} isSetCollapsed={isSetCollapsed} />
            <Divider className={styles['app-divider']} />
            <AppButtonLogout isCollapsed={isCollapsed} isQueryMD={isQueryMD} />
        </Sider>
    );
}
