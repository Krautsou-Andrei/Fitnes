import clsn from 'classnames';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { useSiderMediaQuery } from '@widgets/app-sider/hooks';

import { DataTestIdConfig } from '@shared/config';

import styles from './app-button-switch.module.less';

type AppButtonSwitchProps = {
    isCollapsed: boolean;
    isSetCollapsed: (collapsed: boolean) => void;
};

export function AppButtonSwitch({ isCollapsed, isSetCollapsed }: AppButtonSwitchProps) {
    const { isTablet } = useSiderMediaQuery();

    return (
        <Button
            className={clsn('trigger', styles['custom-trigger'])}
            onClick={() => isSetCollapsed(!isCollapsed)}
            data-test-id={
                isTablet ? DataTestIdConfig.SIDER_SWITCH_MOBILE : DataTestIdConfig.SIDER_SWITCH
            }
        >
            {isCollapsed ? (
                <MenuUnfoldOutlined key='menu-unfold' />
            ) : (
                <MenuFoldOutlined key='menu-unfold' />
            )}
        </Button>
    );
}
