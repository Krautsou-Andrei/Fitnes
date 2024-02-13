import clsn from 'classnames';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { useSiderMediaQuery } from '@widgets/app-sider/lib/use-sider-media-query';

import styles from './app-button-switch.module.less';

type Props = {
    isCollapsed: boolean;
    isSetCollapsed: (collapsed: boolean) => void;
};

export function AppButtonSwitch({ isCollapsed, isSetCollapsed }: Props) {
    const { isTablet } = useSiderMediaQuery();
    
    return (
        <Button
            className={clsn('trigger', styles['custom-trigger'])}
            onClick={() => isSetCollapsed(!isCollapsed)}
            data-test-id={isTablet ? 'sider-switch-mobile' : 'sider-switch'}
        >
            {isCollapsed ? (
                <MenuUnfoldOutlined key='menu-unfold' />
            ) : (
                <MenuFoldOutlined key='menu-unfold' />
            )}
        </Button>
    );
}
