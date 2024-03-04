import { useRegisterForm } from './hooks/useRegisterForm';
import {
    AppInputConfirmPassword,
    AppInputLogin,
    AppInputPassword,
} from '@features/inputs/@ex/register';

import { DataTestIdConfig } from '@shared/config';
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
            <AppInputLogin dataTestId='registration-email' />
            <AppInputPassword
                type='register'
                classNames={'input-password'}
                autoComplete='new-password'
                dataTestId={DataTestIdConfig.REGISTRATION_PASSWORD}
            />

            <AppInputConfirmPassword
                className={'input-password'}
                dataTestId={DataTestIdConfig.REGISTRATION_CONFIRM_PASSWORD}
            />
        </AppForm>
    );
}
