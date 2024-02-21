import { useRegisterForm } from '@features/register/lib/useRegisterForm';
import {
    AppInputConfirmPassword,
    AppInputLogin,
    AppInputPassword,
} from '@features/inputs/@ex/register';

import { AppForm } from '@shared/ui';

import styles from './register-form.module.less';

export function RegisterForm() {
    const { form, onFinish } = useRegisterForm();
    console.log('register');

    return (
        <AppForm
            form={form}
            type='register'
            className={styles['form-register']}
            onFinish={onFinish}
            name='register'
        >
            <AppInputLogin />
            <AppInputPassword
                type='register'
                classNames={styles['input-password']}
                autoComplete='new-password'
            />

            <AppInputConfirmPassword className={styles['input-password']} />
        </AppForm>
    );
}
