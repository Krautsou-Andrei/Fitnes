import clsn from 'classnames';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { useSiderQuery } from '@widgets/app-sider/lib/use-sider-query';

import styles from './app-button-switch.module.less';

type Props = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
};

export function AppButtonSwitch({ collapsed, setCollapsed }: Props) {
    const { isTablet } = useSiderQuery();
    return (
        <Button
            className={clsn('trigger', styles['custom-trigger'])}
            onClick={() => setCollapsed(!collapsed)}
            data-test-id={isTablet ? 'sider-switch-mobile' : 'sider-switch'}
        >
            {collapsed ? (
                <MenuUnfoldOutlined key='menu-unfold' />
            ) : (
                <MenuFoldOutlined key='menu-unfold' />
            )}
        </Button>
    );
}
