import { useState } from 'react';
import clsn from 'classnames';
import { Button, Divider } from 'antd';
import Sider from 'antd/lib/layout/Sider';

import { AppMenu } from '@shared/ui';
import { AppIcon } from '@shared/ui/';
import { LayoutConfig } from '@shared/config';

import { useSiderQuery } from '../lib/use-sider-query';
import { AppButtonSwitch } from './button-switch';

import styles from './app-sider.module.less';

export function AppSider() {
    const [collapsed, setCollapsed] = useState(false);
    const { isTablet, width, widthCollapsed } = useSiderQuery();

    return (
        <Sider
            className={styles['app-sider']}
            breakpoint='md'
            collapsedWidth={widthCollapsed}
            width={width}
            theme='light'
            trigger={null}
            collapsible
            collapsed={collapsed}
            onCollapse={(collapsed) => {
                setCollapsed(collapsed);
            }}
        >
            <AppIcon
                name={`${collapsed ? 'layout/logo-smal' : 'layout/logo-big'}`}
                className={clsn(styles.logo, { [styles['logo--collapsed']]: collapsed })}
                width={collapsed ? 28 : isTablet ? 72 : 133}
                height={isTablet ? 18 : 43}
            />
            <AppMenu collapsed={collapsed} isTablet={isTablet} />
            <AppButtonSwitch collapsed={collapsed} setCollapsed={setCollapsed} />
            <Divider className={styles['app-divider']} />
            <Button
                block
                className={clsn(styles['profile-button'], {
                    [styles['profile-button--collapsed']]: collapsed,
                })}
            >
                {!isTablet && <AppIcon name='app/exit' width={16} height={16} />}
                {!collapsed && LayoutConfig.EXIT}
            </Button>
        </Sider>
    );
}
