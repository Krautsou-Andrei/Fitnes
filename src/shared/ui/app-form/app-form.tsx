import { ReactNode } from 'react';
import clsn from 'classnames';
import { Form, type FormProps } from 'antd';

import { AppButtonSubmit } from './ui/app-button-submit/app-button-submit';
import { AppButtonGoogle } from './ui/app-button-google/app-button-google';
import type { TypeAppForm } from './model/types';

import styles from './app-form.module.less';

interface AppFormProps extends FormProps {
    children: ReactNode;
    className?: string;
    isDisabledSubmit?: boolean;
    slotRemember?: ReactNode;
    type: TypeAppForm;
}

export function AppForm({
    children,
    className,
    isDisabledSubmit,
    slotRemember,
    type,
    ...rest
}: AppFormProps) {
    return (
        <Form
            name='basic'
            className={clsn(styles.form, className)}
            initialValues={{ remember: true }}
            autoComplete='on'
            {...rest}
        >
            {children}
            {slotRemember}
            <div className={styles['buttons-wrapper']}>
                <Form.Item className={styles.button}>
                    <AppButtonSubmit typeButton={type} disabled={isDisabledSubmit} />
                </Form.Item>
                {type !== 'confirm' && (
                    <Form.Item className={styles.button}>
                        <AppButtonGoogle typeButton={type} />
                    </Form.Item>
                )}
            </div>
        </Form>
    );
}
