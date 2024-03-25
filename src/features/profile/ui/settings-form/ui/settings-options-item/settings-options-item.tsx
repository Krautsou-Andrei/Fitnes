import { ReactNode } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Form, Switch, Tooltip, Typography } from 'antd';

import { STYLES } from '@shared/config/constants';

import styles from './settings-options-item.module.less';

const { Text } = Typography;

type SettingsOptionsItemProps = {
    titleOption: string | ReactNode;
    titleTooltip: string;
    name: string;
    isDisabled: boolean;
    dataTestIcon?: string;
    dataTestSwitch?: string;
    isQueryXS: boolean;
};

export function SettingsOptionsItem({
    name,
    titleOption,
    titleTooltip,
    isDisabled,
    dataTestIcon,
    dataTestSwitch,
    isQueryXS,
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
                    <ExclamationCircleOutlined
                        className={styles['settings-tooltip-icon']}
                        data-test-id={dataTestIcon}
                    />
                </Tooltip>
            </div>
            <Form.Item name={name} valuePropName='checked'>
                <Switch
                    disabled={isDisabled}
                    size={isQueryXS ? 'small' : 'default'}
                    data-test-id={dataTestSwitch}
                ></Switch>
            </Form.Item>
        </div>
    );
}
