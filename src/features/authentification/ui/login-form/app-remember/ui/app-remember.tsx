import { Button, Checkbox, Form } from 'antd';

import { DataTestIdConfig, LayoutConfig } from '@shared/config';

import styles from './app-remember.module.less';

export type AppRememberProps = {
    isDisabledForgot: boolean;
    onClick: () => void;
};

export function AppRemember({ isDisabledForgot, onClick }: AppRememberProps) {
    return (
        <Form.Item className={styles.remember}>
            <Form.Item name='isRemember' valuePropName='checked' noStyle>
                <Checkbox data-test-id={DataTestIdConfig.LOGIN_REMEMBER}>
                    {LayoutConfig.CHECKBOX_REMEMBER_ME}
                </Checkbox>
            </Form.Item>
            <Button
                type='text'
                className={styles['login-form-forgot']}
                size='large'
                disabled={isDisabledForgot}
                onClick={onClick}
                data-test-id={DataTestIdConfig.LOGIN_FORGOT_BUTTON}
            >
                {LayoutConfig.LINK_FORGOT_PASSWORD}
            </Button>
        </Form.Item>
    );
}
