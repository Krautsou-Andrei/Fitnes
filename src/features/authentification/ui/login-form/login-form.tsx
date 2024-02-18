import { Form, Input } from 'antd';

import { RequestLoginBody } from '@entities/session';
import { loginThunk } from '@features/authentification/model/login';

import { LayoutConfig } from '@shared/config';
import { AppForm, AppRemember } from '@shared/ui';
import { AppDispatch } from '@shared/types/store';
import { useAppDispatch } from '@shared/hooks';

import styles from './login-form.module.less';

export function LoginForm() {
    const dispatch: AppDispatch = useAppDispatch();

    const onFinish = ({ email, password }: RequestLoginBody) => {
        dispatch(loginThunk({ email, password }))
            .unwrap()
            .catch((error: Error) => {
                console.log('login', { type: 'server', message: error.message });
            });
    };
    return (
        <AppForm
            type='authentification'
            className={styles['form-authentification']}
            slotRemember={<AppRemember />}
            onFinish={onFinish}
            name='authentification'
        >
            <>
                <Form.Item
                    className={styles.input}
                    label={LayoutConfig.INPUT_TYPE_EMAIL}
                    name={LayoutConfig.INPUT_TYPE_EMAIL}
                    rules={[{ required: true, message: 'Please input your e-mail!' }]}
                >
                    <Input
                        addonBefore={LayoutConfig.INPUT_TEXT_EMAIL}
                        size='large'
                        autoComplete='username'
                    />
                </Form.Item>
                <Form.Item
                    className={styles['input-password']}
                    label={LayoutConfig.INPUT_TYPE_PASSWORD}
                    name={LayoutConfig.INPUT_TYPE_PASSWORD}
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                        placeholder={LayoutConfig.INPUT_TEXT_PASSWODR}
                        size='large'
                        autoComplete='current-password'
                    />
                </Form.Item>
            </>
        </AppForm>
    );
}
