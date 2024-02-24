import { useChangePasswordForm } from './lib/use-change-password-form';

import { AppInputConfirmPassword, AppInputPassword } from '@features/inputs';

import { AppForm } from '@shared/ui';
import { LayoutConfig } from '@shared/config';

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
                dataTestId='change-password'
            />
            <AppInputConfirmPassword
                className='input-password'
                dataTestId='change-confirm-password'
            />
        </AppForm>
    );
}
