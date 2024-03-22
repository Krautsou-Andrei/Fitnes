import { Form, Input } from 'antd';
import clsn from 'classnames';

import { validateConfirmPasswordRules } from '../lib/validate-confirm-password-rules';
import { AutoCompleteConfig } from '@features/inputs/config';

import { LayoutConfig } from '@shared/config';

import styles from './app-input-confirm-password.module.less';

type AppInputConfirmPasswordProps = {
    className?: string;
    dataTestId?: string;
    isRequire?: boolean;
};

export function AppInputConfirmPassword({
    className,
    dataTestId,
    isRequire,
}: AppInputConfirmPasswordProps) {
    const rules = validateConfirmPasswordRules(isRequire);

    return (
        <Form.Item
            className={clsn(styles['input-password'], className)}
            label={LayoutConfig.INPUT_TYPE_PASSWORD_CONFIRM}
            name={LayoutConfig.INPUT_TYPE_PASSWORD_CONFIRM}
            dependencies={[LayoutConfig.INPUT_TYPE_PASSWORD]}
            rules={rules}
        >
            <Input.Password
                type='password'
                placeholder={LayoutConfig.INPUT_TEXT_PASSWORD_CONFIRM}
                autoComplete={AutoCompleteConfig.NEW_PASSWORD}
                data-test-id={dataTestId}
            />
        </Form.Item>
    );
}
