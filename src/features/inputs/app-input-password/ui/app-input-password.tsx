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
    dataTestId: string;
};

export function AppInputPassword({ autoComplete, classNames, type, dataTestId }: Props) {
    const rules = validatePasswordRules(type);

    return (
        <Form.Item
            className={clsn('app-input-password', styles['input-password'], classNames)}
            label={LayoutConfig.INPUT_TYPE_PASSWORD}
            name={LayoutConfig.INPUT_TYPE_PASSWORD}
            rules={rules}
        >
            <Input.Password
                placeholder={LayoutConfig.INPUT_TEXT_PASSWODR}
                size='large'
                autoComplete={autoComplete}
                data-test-id={dataTestId}
            />
        </Form.Item>
    );
}
