import { useChangePasswordForm } from './lib/use-change-password-form';

import { AppInputConfirmPassword, AppInputPassword } from '@features/inputs/@ex/change-password';

import { AppForm } from '@shared/ui';
import { DataTestIdConfig, LayoutConfig } from '@shared/config';

export function ChangePasswordForm() {
    const { email, onFinish, form } = useChangePasswordForm();

    return (
        <AppForm type='confirm' form={form} onFinish={onFinish}>
            <input readOnly className='visually-hidden' autoComplete='username' value={email} />
            <AppInputPassword
                classNames='input-password'
                autoComplete='new password'
                title={LayoutConfig.INPUT_TEXT_PASSWORD_CHANGE}
                type={'register'}
                dataTestId={DataTestIdConfig.CHANGE_PASSWORD}
            />
            <AppInputConfirmPassword
                className='input-password'
                dataTestId={DataTestIdConfig.CHANGE_CONFIRM_PASSWORD}
            />
        </AppForm>
    );
}
