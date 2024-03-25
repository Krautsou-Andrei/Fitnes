import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { type ButtonType } from 'antd/lib/button';

import { useAppSettingsButton, useButtonMediaQuery } from '../hooks';

import { DataTestIdConfig, LayoutConfig } from '@shared/config';
import { usePageIsEqual } from '@shared/hooks';

type AppSettingsButtonProps = {
    className?: string;
};

export function AppSettingsButton({ className }: AppSettingsButtonProps) {
    const {isProfile} = usePageIsEqual()
    const { isTablet, isQueryMD, buttonType } = useButtonMediaQuery();
    const { onClick } = useAppSettingsButton();

    return (
        <Button
            type={buttonType as ButtonType}
            shape={isQueryMD && !isProfile ? 'circle' : 'default'}
            className={className}
            onClick={onClick}
            data-test-id={DataTestIdConfig.HEADER_SETTINGS}
        >
            {((isTablet && isQueryMD) || !isTablet || isProfile) && <SettingOutlined />}
            {!isQueryMD && LayoutConfig.BUTTON_SETTINGS}
        </Button>
    );
}
