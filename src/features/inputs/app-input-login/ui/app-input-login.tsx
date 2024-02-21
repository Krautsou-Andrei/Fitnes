import { Form, Input } from 'antd';
import { validateLoginRules } from '../lib/validate-login-rules';

import { LayoutConfig } from '@shared/config';

import styles from './app-input-login.module.less';

export function AppInputLogin() {
    return (
        <Form.Item
            className={styles['input-login']}
            label={LayoutConfig.INPUT_TYPE_EMAIL}
            name={LayoutConfig.INPUT_TYPE_EMAIL}
            rules={validateLoginRules}
           
        >
            <Input
                type='email'
                addonBefore={LayoutConfig.INPUT_TEXT_EMAIL}
                size='large'
                autoComplete='username'
                style={{
                    boxShadow: 'none',
                    borderColor: '<desired-color>',
                  }}
            />
        </Form.Item>
    );
}
