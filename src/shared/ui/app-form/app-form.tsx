import { Button, Form, Input } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';

import { LayoutConfig } from '@shared/config';

import styles from './app-form.module.less';

export function AppForm() {
    return (
        <Form
            name='basic'
            className={styles.form}
            initialValues={{ remember: true }}
            autoComplete='off'
        >
            <div className={styles['inputs-wrapper']}>
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
                    <Input.Password placeholder={LayoutConfig.INPUT_TEXT_PASSWODR} size='large' />
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
            </div>
            <div className={styles['buttons-wrapper']}>
                <Form.Item className={styles.button}>
                    <Button block type='primary' htmlType='submit' size='large'>
                        {LayoutConfig.BUTTON_REGISTER}
                    </Button>
                </Form.Item>
                <Form.Item className={styles.button}>
                    <Button block htmlType='submit' size='large'>
                        <GooglePlusOutlined />
                        {LayoutConfig.BUTTON_REGISTER_GOOGLE}
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
}
