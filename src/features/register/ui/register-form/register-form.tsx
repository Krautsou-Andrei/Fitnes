import { Form, Input } from 'antd';

import { RequestRegisterBody } from '@entities/session';
import { registerThunk } from '@features/register/model/register';

import { useAppDispatch } from '@shared/hooks';
import { AppDispatch } from '@shared/types/store';
import { AppForm } from '@shared/ui';
import { LayoutConfig } from '@shared/config';

import styles from './register-form.module.less';

export function RegisterForm() {
    const dispatch: AppDispatch = useAppDispatch();

    const onFinish = ({ email, password }: RequestRegisterBody) => {
        dispatch(registerThunk({ email, password }))
            .unwrap()
            .catch((error: Error) => {
                console.log('register', { type: 'server', message: error.message });
            });
    };

    // const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
        <AppForm
            type='register'
            className={styles['form-register']}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            name='register'
        >
            <Form.Item
                label={LayoutConfig.INPUT_TYPE_EMAIL}
                name={LayoutConfig.INPUT_TYPE_EMAIL}
                rules={[{ required: true, message: 'Please input your e-mail!' }]}
            >
                <Input
                    type='email'
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
                    type='password'
                    placeholder={LayoutConfig.INPUT_TEXT_PASSWODR}
                    size='large'
                    autoComplete='new-password'
                />
            </Form.Item>
            <Form.Item
                className={styles['input-password']}
                label={LayoutConfig.INPUT_TYPE_PASSWORD_CONFIRM}
                name={LayoutConfig.INPUT_TYPE_PASSWORD_CONFIRM}
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password
                    type='password'
                    placeholder={LayoutConfig.INPUT_TEXT_PASSWORD_CONFIRM}
                    size='large'
                    autoComplete='new-password'
                />
            </Form.Item>
        </AppForm>
    );
}
