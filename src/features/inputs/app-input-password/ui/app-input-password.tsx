import { Form, Input } from 'antd';
import clsn from 'classnames';

import { InputPasswordType } from '../model/types';
import { validatePasswordRules } from '../lib/validate-password-rules';

import { LayoutConfig } from '@shared/config';

import styles from './app-input-password.module.less';

type AppInputPasswordProps = {
    autoComplete: string;
    classNames?: string;
    dataTestId: string;
    title?: string;
    type: InputPasswordType;
};

export function AppInputPassword({ autoComplete, classNames, title, type, dataTestId }: AppInputPasswordProps) {
    const rules = validatePasswordRules(type);

    return (
        <Form.Item
            className={clsn('app-input-password', styles['input-password'], classNames)}
            label={LayoutConfig.INPUT_TYPE_PASSWORD}
            name={LayoutConfig.INPUT_TYPE_PASSWORD}
            rules={rules}
        >
            <Input.Password
                placeholder={title ? title : LayoutConfig.INPUT_TEXT_PASSWORD}
                autoComplete={autoComplete}
                data-test-id={dataTestId}
            />
        </Form.Item>
    );
}
