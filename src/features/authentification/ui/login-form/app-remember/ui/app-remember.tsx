import { Button, Checkbox, Form } from 'antd';

import { LayoutConfig } from '@shared/config';

import styles from './app-remember.module.less';

export type Props = {
    isDisabledForgot: boolean;
    onClick: () => void;
};

export function AppRemember({ isDisabledForgot, onClick }: Props) {
    return (
        <Form.Item className={styles.remember}>
            <Form.Item name='isRemember' valuePropName='checked' noStyle>
                <Checkbox>{LayoutConfig.CHECKBOX_REMEMBER_ME}</Checkbox>
            </Form.Item>
            <Button
                type='text'
                className={styles['login-form-forgot']}
                size='large'
                disabled={isDisabledForgot}
                onClick={onClick}
            >
                {LayoutConfig.LINK_FORGOT_PASSWORD}
            </Button>
        </Form.Item>
    );
}
