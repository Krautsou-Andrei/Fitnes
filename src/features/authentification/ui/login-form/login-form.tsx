import { AppRemember } from './app-remember';

import { useLoginForm } from './lib/use-login-form';

import { AppInputLogin, AppInputPassword } from '@features/inputs/@ex/authentification';

import { AppForm } from '@shared/ui';

import styles from './login-form.module.less';

export function LoginForm() {
    const { checkEmail, form, isValidateEmail, onClickForgot, onFinish } = useLoginForm();

    return (
        <AppForm
            form={form}
            type='authentification'
            className={styles['form-authentification']}
            onFinish={onFinish}
            initialValues={{ remember: true }}
            name='authentification'
            onChange={checkEmail}
        >
            <AppInputLogin />
            <AppInputPassword
                type='login'
                classNames={styles['input-password']}
                autoComplete='current-password'
            />
            <AppRemember isDisabledForgot={isValidateEmail} onClick={onClickForgot} />
        </AppForm>
    );
}
