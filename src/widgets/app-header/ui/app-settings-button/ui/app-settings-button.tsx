import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { type ButtonType } from 'antd/lib/button';

import { useButtonMediaQuery } from '../hooks/use-button-media-query';

import { LayoutConfig } from '@shared/config';

export function AppSettingsButton() {
    const { isTablet, isQueryMD, buttonType } = useButtonMediaQuery();

    return (
        <Button type={buttonType as ButtonType} shape={isQueryMD ? 'circle' : 'default'}>
            {((isTablet && isQueryMD) || !isTablet) && <SettingOutlined />}
            {!isQueryMD && LayoutConfig.BUTTON_SETTINGS}
        </Button>
    );
}
