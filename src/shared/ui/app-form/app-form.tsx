import { ReactElement } from 'react';
import clsn from 'classnames';
import { Button, Form } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';

import { LayoutConfig } from '@shared/config';

import styles from './app-form.module.less';

type AppFormProps = {
    children: ReactElement;
    className?: string;
    slotRemember?: ReactElement;
    type: 'authentification' | 'register';
};

export function AppForm({ children, className, slotRemember, type }: AppFormProps) {
    return (
        <Form
            name='basic'
            className={clsn(styles.form, className)}
            initialValues={{ remember: true }}
            autoComplete='off'
        >
            {children}
            {slotRemember}
            <div className={styles['buttons-wrapper']}>
                <Form.Item className={styles.button}>
                    <Button block type='primary' htmlType='submit' size='large'>
                        {LayoutConfig.BUTTON_REGISTER}
                    </Button>
                </Form.Item>
                <Form.Item className={styles.button}>
                    <Button block htmlType='submit' size='large'>
                        <GooglePlusOutlined />
                        {type === 'register' && LayoutConfig.BUTTON_REGISTER_GOOGLE}
                        {type === 'authentification' && LayoutConfig.BUTTON_AUTHENTIFICATION_COOGLE}
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
}
