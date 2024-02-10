import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import { LayoutConfig } from '@shared/config';

import styles from './app-setting-button.module.less';

export function AppSettingsButton() {
    return (
        <Button icon={<SettingOutlined />} size='middle' className={styles['button-settings']}>
            {LayoutConfig.BUTTON_SETTINGS}
        </Button>
    );
}
