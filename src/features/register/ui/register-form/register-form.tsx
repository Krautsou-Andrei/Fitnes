import { useRegisterForm } from './lib/useRegisterForm';
import {
    AppInputConfirmPassword,
    AppInputLogin,
    AppInputPassword,
} from '@features/inputs/@ex/register';

import { AppForm } from '@shared/ui';

export function RegisterForm() {
    const { isDisabledSubmit, form, onFinish, validateForm } = useRegisterForm();

    return (
        <AppForm
            form={form}
            type='register'
            onFinish={onFinish}
            onChange={validateForm}
            name='register'
            isDisabledSubmit={isDisabledSubmit}
        >
            <AppInputLogin />
            <AppInputPassword
                type='register'
                classNames={'input-password'}
                autoComplete='new-password'
            />

            <AppInputConfirmPassword className={'input-password'} />
        </AppForm>
    );
}
