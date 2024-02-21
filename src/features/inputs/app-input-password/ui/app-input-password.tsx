import { Form, Input } from 'antd';
import clsn from 'classnames';

import { InputPasswordType } from '../model/types';
import { validatePasswordRules } from '../lib/validate-password-rules';

import { LayoutConfig } from '@shared/config';

import styles from './app-input-password.module.less';

type Props = {
    autoComplete: string;
    classNames?: string;
    type: InputPasswordType;
};

export function AppInputPassword({ autoComplete, classNames, type }: Props) {
    const rules = validatePasswordRules(type);

    return (
        <Form.Item
            className={clsn(styles['input-password'], classNames)}
            label={LayoutConfig.INPUT_TYPE_PASSWORD}
            name={LayoutConfig.INPUT_TYPE_PASSWORD}
            rules={rules}
        >
            <Input.Password
                placeholder={LayoutConfig.INPUT_TEXT_PASSWODR}
                size='large'
                autoComplete={autoComplete}
            />
        </Form.Item>
    );
}
