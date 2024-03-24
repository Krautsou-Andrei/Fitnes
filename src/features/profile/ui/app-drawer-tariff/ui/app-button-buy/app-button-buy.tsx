import { Button, type ButtonProps } from 'antd';

import { SettingsConfig } from '@features/profile/config';

import styles from './app-button-buy.module.less';
import { DataTestIdConfig } from '@shared/config';

type AppButtonBuyProps = ButtonProps;

export function AppButtonBuy({ ...rest }: AppButtonBuyProps) {
    return (
        <Button
            block
            className={styles['button-buy']}
            form='form-tariff'
            type='primary'
            htmlType='submit'
            data-test-id={DataTestIdConfig.TARIFF_SUBMIT}
            {...rest}
        >
            {SettingsConfig.BUTTON_BUY}
        </Button>
    );
}
