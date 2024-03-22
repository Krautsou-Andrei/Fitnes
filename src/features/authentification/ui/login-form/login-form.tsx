import { AppRemember } from './app-remember';

import { useLoginForm } from './hooks/use-login-form';

import {
    AppInputLogin,
    AppInputPassword,
    AutoCompleteConfig,
} from '@features/inputs/@ex/authentification';

import { AppForm } from '@shared/ui';
import { DataTestIdConfig } from '@shared/config';

import styles from './login-form.module.less';

export function LoginForm() {
    const { checkEmail, form, isValidateEmail, onClickGoogle, onClickForgot, onFinish } =
        useLoginForm();

    return (
        <AppForm
            form={form}
            type='authentification'
            className={styles['form-authentification']}
            initialValues={{ remember: true }}
            name='authentification'
            onFinish={onFinish}
            onChange={checkEmail}
            onClickGoogle={onClickGoogle}
        >
            <AppInputLogin dataTestId={DataTestIdConfig.LOGIN_EMAIL} />
            <AppInputPassword
                type='login'
                classNames={styles['input-password']}
                autoComplete={AutoCompleteConfig.CURRENT_PASSWORD}
                dataTestId={DataTestIdConfig.LOGIN_PASSWORD}
            />
            <AppRemember isDisabledForgot={isValidateEmail} onClick={onClickForgot} />
        </AppForm>
    );
}
