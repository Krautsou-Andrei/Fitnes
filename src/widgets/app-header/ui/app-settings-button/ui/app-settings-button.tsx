import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { type ButtonType } from 'antd/lib/button';

import { useButtonQuery } from '../lib/use-button-query';

import { LayoutConfig } from '@shared/config';

export function AppSettingsButton() {
    const { isTablet, isMobile, buttonType } = useButtonQuery();

    return (
        <Button type={buttonType as ButtonType} shape={isMobile ? 'circle' : 'default'}>
            {((isTablet && isMobile) || !isTablet) && <SettingOutlined />}
            {!isMobile && LayoutConfig.BUTTON_SETTINGS}
        </Button>
    );
}
