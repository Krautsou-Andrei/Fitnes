import { Form } from 'antd';

import { RequestChangePasswordBody } from '@entities/session';
import { changePasswordThunk } from '@features/change-password/@ex/result';

import { SessionStorageConfig } from '@shared/config';
import { useAppDispatch } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';

export function useChangePasswordForm() {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();

    const email = sessionStorage.getItem(SessionStorageConfig.EMAIL) || '';

    const onFinish = async ({ password, confirmPassword }: RequestChangePasswordBody) => {
        try {
            await dispatch(changePasswordThunk({ password, confirmPassword })).unwrap();
        } catch {
            (error: unknown) => {
                showErrorForDevelop('Change-password', error);
            };
        }
    };

    return { email, form, onFinish };
}
