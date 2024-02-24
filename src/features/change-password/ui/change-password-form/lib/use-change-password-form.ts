import { Form } from 'antd';

import { RequestChangePasswordBody } from '@entities/session';
import { changePasswordThunk } from '@features/change-password/@ex/result';

import { SessionStorageConfig } from '@shared/config';
import { useAppDispatch } from '@shared/hooks';

export function useChangePasswordForm() {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();

    const email = sessionStorage.getItem(SessionStorageConfig.EMAIL) || '';

    const onFinish = ({ password, confirmPassword }: RequestChangePasswordBody) => {
        dispatch(changePasswordThunk({ password, confirmPassword }))
            .unwrap()
            .catch((error: Error) => {
                console.log('Change-password', error);
            });
    };

    return { email, form, onFinish };
}
