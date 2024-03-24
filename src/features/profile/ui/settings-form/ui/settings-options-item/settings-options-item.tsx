import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Form, Switch, Tooltip, Typography } from 'antd';

import { STYLES } from '@shared/config/constants';

import styles from './settings-options-item.module.less';

const { Text } = Typography;

type SettingsOptionsItemProps = {
    titleOption: string;
    titleTooltip: string;
    name: string;
    isDisabled: boolean;
};

export function SettingsOptionsItem({
    name,
    titleOption,
    titleTooltip,
    isDisabled,
}: SettingsOptionsItemProps) {
    return (
        <div className={styles['settings-option']}>
            <div className={styles['setting-title']}>
                <Text>{titleOption}</Text>
                <Tooltip
                    placement='bottomLeft'
                    title={titleTooltip}
                    color={STYLES.BACKGROUND_TOOLTIP}
                >
                    <ExclamationCircleOutlined className={styles['settings-tooltip-icon']} />
                </Tooltip>
            </div>
            <Form.Item name={name} valuePropName='checked'>
                <Switch disabled={isDisabled}></Switch>
            </Form.Item>
        </div>
    );
}
