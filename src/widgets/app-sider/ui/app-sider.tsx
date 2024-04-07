import clsn from 'classnames';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import Sider from 'antd/lib/layout/Sider';

import { useAppSider } from '../hooks';
import { AppButtonSwitch } from './button-switch';

import { AppButtonLogout } from '@features/logout';

import { AppMenu, AppIcon } from '@shared/ui';
import { PathConfig } from '@shared/config';

import styles from './app-sider.module.less';

export function AppSider() {
    const { closeMenu, isCollapsed, isSetCollapsed, isQueryMD, width, widthCollapsed } =
        useAppSider();

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
            <Link to={PathConfig.HOME}>
                <AppIcon
                    name={`${isCollapsed ? 'layout/logo-smal' : 'layout/logo-big'}`}
                    className={clsn(styles.logo, { [styles['logo--collapsed']]: isCollapsed })}
                    width={isCollapsed ? 28 : isQueryMD ? 72 : 133}
                    height={isQueryMD ? 18 : 43}
                />
            </Link>

            <AppMenu isCollapsed={isCollapsed} isQueryMD={isQueryMD} closeMenu={closeMenu} />
            <AppButtonSwitch isCollapsed={isCollapsed} isSetCollapsed={isSetCollapsed} />
            <Divider className={styles['app-divider']} />
            <AppButtonLogout isCollapsed={isCollapsed} isQueryMD={isQueryMD} />
        </Sider>
    );
}
