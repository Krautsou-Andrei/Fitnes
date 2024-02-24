import { useState } from 'react';

import { Form } from 'antd';

import { loginThunk } from '@features/authentification/model/login';
import { checkEmailThunk } from '@features/confirm-email/@ex/authetification';

import type { RequestLoginBody } from '@entities/session';

import { useAppDispatch } from '@shared/hooks';
import { LayoutConfig, SessionStorageConfig } from '@shared/config';
import type { AppDispatch } from '@shared/types/store';

export function useLoginForm() {
    const [form] = Form.useForm();
    const dispatch: AppDispatch = useAppDispatch();

    const [isValidateEmail, setIsValidateEmail] = useState<boolean>(false);

    const checkEmail = async () => {
        try {
            const result = await form.validateFields([LayoutConfig.INPUT_TYPE_EMAIL]);
            setIsValidateEmail(false);
            return result;
        } catch (error) {
            setIsValidateEmail(true);
            console.log('Valitade e-mail', error);
        }
    };

    const onClickForgot = async () => {
        try {
            const result = await checkEmail();

            if (result.email) {
                sessionStorage.setItem(SessionStorageConfig.EMAIL, result.email);
                dispatch(checkEmailThunk(result));
            }
        } catch (error) {
            console.log('Check e-mail', error);
        }
    };

    const onFinish = async ({ email, password, isRemember }: RequestLoginBody) => {
        try {
            await dispatch(loginThunk({ email, password, isRemember })).unwrap();
        } catch {
            (error: Error) => {
                console.log('Login', { type: 'server', message: error.message });
            };
        }
    };

    return { checkEmail, form, isValidateEmail, onClickForgot, onFinish };
}
