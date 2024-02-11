import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import { LayoutConfig } from '@shared/config';

export function AppSettingsButton() {
    return (
        <Button size='middle' type='text'>
            <SettingOutlined />
            {LayoutConfig.BUTTON_SETTINGS}
        </Button>
    );
}
