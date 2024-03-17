import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { type ButtonType } from 'antd/lib/button';

import { useButtonMediaQuery } from '../hooks/use-button-media-query';

import { LayoutConfig } from '@shared/config';

type AppSettingsButtonProps = {
    className?: string;
};

export function AppSettingsButton({ className }: AppSettingsButtonProps) {
    const { isTablet, isQueryMD, buttonType } = useButtonMediaQuery();

    return (
        <Button
            type={buttonType as ButtonType}
            shape={isQueryMD ? 'circle' : 'default'}
            className={className}
        >
            {((isTablet && isQueryMD) || !isTablet) && <SettingOutlined />}
            {!isQueryMD && LayoutConfig.BUTTON_SETTINGS}
        </Button>
    );
}
