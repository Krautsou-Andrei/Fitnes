import { Form, Input } from 'antd';
import { validateLoginRules } from '../lib/validate-login-rules';

import { AutoCompleteConfig } from '@features/inputs/config';

import { LayoutConfig } from '@shared/config';

import styles from './app-input-login.module.less';

type AppInputLoginProps = {
    dataTestId?: string;
};

export function AppInputLogin({ dataTestId }: AppInputLoginProps) {
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
                autoComplete={AutoCompleteConfig.USER_NAME}
                style={{
                    boxShadow: 'none',
                    borderColor: '<desired-color>',
                }}
                data-test-id={dataTestId}
            />
        </Form.Item>
    );
}
