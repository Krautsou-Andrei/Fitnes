import React, { useState } from 'react';
import clsn from 'classnames';
import { Button, Divider } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { AppMenu } from '@shared/ui';
import { AppIcon } from '@shared/ui/';
import { LayoutConfig } from '@shared/config';

import styles from './app-sider.module.less';

export function AppSider() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider
            className={styles['app-sider']}
            breakpoint='lg'
            collapsedWidth='64'
            width='208'
            theme='light'
            trigger={null}
            collapsible
            collapsed={collapsed}
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <AppIcon
                name={`${collapsed ? 'layout/logo-smal' : 'layout/logo-big'}`}
                className={clsn(styles.logo, { [styles['logo--collapsed']]: collapsed })}
                width={collapsed ? 28 : 160}
                height={43}
            />
            <AppMenu collapsed={collapsed} />
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                key: collapsed ? 'menu-unfold' : 'menu-fold',

                className: clsn('trigger', styles['custom-trigger']),
                onClick: () => setCollapsed(!collapsed),
            })}
            <Divider className={styles['app-divider']} />
            <Button
                block
                className={clsn(styles['profile-button'], {
                    [styles['profile-button--collapsed']]: collapsed,
                })}
            >
                <AppIcon name='app/exit' width={16} height={16} />
                {!collapsed && LayoutConfig.EXIT}
            </Button>
        </Sider>
    );
}
