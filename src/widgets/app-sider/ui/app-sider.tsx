import { useState } from 'react';
import clsn from 'classnames';
import { Button, Divider } from 'antd';
import Sider from 'antd/lib/layout/Sider';

import { useSiderMediaQuery } from '../lib/use-sider-media-query';
import { AppButtonSwitch } from './button-switch';

import { AppMenu } from '@shared/ui';
import { AppIcon } from '@shared/ui/';
import { LayoutConfig } from '@shared/config';

import styles from './app-sider.module.less';

export function AppSider() {
    const { isQueryMD, width, widthCollapsed } = useSiderMediaQuery();
    const [isCollapsed, isSetCollapsed] = useState(isQueryMD ? true : false);

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
            <Button
                block
                className={clsn(styles['profile-button'], {
                    [styles['profile-button--collapsed']]: isCollapsed,
                })}
            >
                {!isQueryMD && <AppIcon name='app/exit' width={16} height={16} />}
                {!isCollapsed && LayoutConfig.EXIT}
            </Button>
        </Sider>
    );
}
