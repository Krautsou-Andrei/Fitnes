import { Form } from 'antd';

import { registerThunk } from '@features/register/model/register';

import { RequestRegisterBody } from '@entities/session';

import { useAppDispatch } from '@shared/hooks';

export function useRegisterForm() {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();

    const onFinish = ({ email, password }: RequestRegisterBody) => {
        dispatch(registerThunk({ email, password }))
            .unwrap()
            .catch((error: Error) => {
                console.log('register', { type: 'server', message: error.message });
            });
    };

    return { form, onFinish };
}
