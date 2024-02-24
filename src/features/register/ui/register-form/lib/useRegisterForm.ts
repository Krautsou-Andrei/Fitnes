import { useState } from 'react';
import { Form } from 'antd';

import { registerThunk } from '@features/register/model/register';

import { RequestRegisterBody } from '@entities/session';

import { useAppDispatch } from '@shared/hooks';
import { LayoutConfig, regExpConfig } from '@shared/config';

export function useRegisterForm() {
    const [isDisabledSubmit, setIsDisabledSubmit] = useState<boolean>(false);
    const [form] = Form.useForm();

    const validateForm = () => {
        const email = form.getFieldValue(LayoutConfig.INPUT_TYPE_EMAIL);
        const password = form.getFieldValue(LayoutConfig.INPUT_TYPE_PASSWORD);
        const passwordConfirm = form.getFieldValue(LayoutConfig.INPUT_TYPE_PASSWORD_CONFIRM);

        if (
            regExpConfig.email.test(email) &&
            regExpConfig.password.test(password) &&
            password === passwordConfirm
        ) {
            setIsDisabledSubmit(false);
        } else {
            setIsDisabledSubmit(true);
        }
    };

    const dispatch = useAppDispatch();

    const onFinish = async ({ email, password }: RequestRegisterBody) => {
        try {
            await dispatch(registerThunk({ email, password })).unwrap();
        } catch {
            (error: Error) => {
                console.log('register', { type: 'server', message: error.message });
            };
        }
    };

    return { isDisabledSubmit, form, onFinish, validateForm };
}
