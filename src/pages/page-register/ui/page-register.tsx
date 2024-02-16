import { Form, Input } from 'antd';

import { AppAuthContent } from '@widgets/app-auth-content';

import { AppBackgroundBlur, AppForm } from '@shared/ui';
import { LayoutConfig } from '@shared/config';

import styles from './page-register.module.less';

export function PageRegister() {
    return (
        <AppBackgroundBlur>
            <AppAuthContent>
                <AppForm type='register'>
                    <>
                        <Form.Item
                            className={styles.input}
                            label={LayoutConfig.INPUT_TYPE_EMAIL}
                            name={LayoutConfig.INPUT_TYPE_EMAIL}
                            rules={[{ required: true, message: 'Please input your e-mail!' }]}
                        >
                            <Input addonBefore={LayoutConfig.INPUT_TEXT_EMAIL} size='large' />
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
                            />
                        </Form.Item>
                        <Form.Item
                            className={styles['input-password']}
                            label={LayoutConfig.INPUT_TYPE_PASSWORD_CONFIRM}
                            name={LayoutConfig.INPUT_TYPE_PASSWORD_CONFIRM}
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                placeholder={LayoutConfig.INPUT_TEXT_PASSWORD_CONFIRM}
                                size='large'
                            />
                        </Form.Item>
                    </>
                </AppForm>
            </AppAuthContent>
        </AppBackgroundBlur>
    );
}
