import { Form, Input } from 'antd';
import clsn from 'classnames';

import { InputPasswordType } from '../model/types';
import { validatePasswordRules } from '../lib/validate-password-rules';

import { LayoutConfig } from '@shared/config';

import styles from './app-input-password.module.less';

type AppInputPasswordProps = {
    autoComplete: string;
    type: InputPasswordType;
    classNames?: string;
    dataTestId?: string;
    isRequire?: boolean;
    title?: string;
    help?: string;
};

export function AppInputPassword({
    autoComplete,
    title,
    classNames,
    dataTestId,
    isRequire,
    type,
    help,
}: AppInputPasswordProps) {
    const rules = validatePasswordRules(type, isRequire);

    return (
        <Form.Item
            className={clsn('app-input-password', styles['input-password'], classNames)}
            label={LayoutConfig.INPUT_TYPE_PASSWORD}
            name={LayoutConfig.INPUT_TYPE_PASSWORD}
            rules={rules}
            help={help}
        >
            <Input.Password
                placeholder={title ? title : LayoutConfig.INPUT_TEXT_PASSWORD}
                autoComplete={autoComplete}
                data-test-id={dataTestId}
            />
        </Form.Item>
    );
}
