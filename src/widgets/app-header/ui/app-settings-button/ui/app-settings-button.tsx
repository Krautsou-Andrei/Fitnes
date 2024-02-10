import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import { LayoutConfig } from '@shared/config';

export function AppSettingsButton() {
    return (
        <Button icon={<SettingOutlined />} size='middle' type='text'>
            {LayoutConfig.BUTTON_SETTINGS}
        </Button>
    );
}
