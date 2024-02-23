import { Form, Input } from 'antd';
import { validateConfirmPasswordRules } from '../lib/validate-confirm-password-rules';

import { LayoutConfig } from '@shared/config';

type Props = {
    className?: string;
    dataTestId: string;
};

export function AppInputConfirmPassword({ className, dataTestId }: Props) {
    return (
        <Form.Item
            className={className}
            label={LayoutConfig.INPUT_TYPE_PASSWORD_CONFIRM}
            name={LayoutConfig.INPUT_TYPE_PASSWORD_CONFIRM}
            dependencies={[LayoutConfig.INPUT_TYPE_PASSWORD]}
            rules={validateConfirmPasswordRules}
        >
            <Input.Password
                type='password'
                placeholder={LayoutConfig.INPUT_TEXT_PASSWORD_CONFIRM}
                size='large'
                autoComplete='new-password'
                data-test-id={dataTestId}
            />
        </Form.Item>
    );
}
