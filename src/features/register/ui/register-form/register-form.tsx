import { useRegisterForm } from '@features/register/lib/useRegisterForm';
import {
    AppInputConfirmPassword,
    AppInputLogin,
    AppInputPassword,
} from '@features/inputs/@ex/register';

import { AppForm } from '@shared/ui';

export function RegisterForm() {
    const { form, onFinish } = useRegisterForm();

    return (
        <AppForm form={form} type='register' onFinish={onFinish} name='register'>
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
