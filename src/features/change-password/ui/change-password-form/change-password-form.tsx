import { RequestChangePasswordBody } from '@entities/session';
import { changePasswordThunk } from '@features/change-password/model/change-password';
import { AppInputConfirmPassword, AppInputPassword } from '@features/inputs';
import { useAppDispatch } from '@shared/hooks';
import { AppForm } from '@shared/ui';
import { Form } from 'antd';

export function ChangePasswordForm() {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();

    const onFinish = ({ password, confirmPassword }: RequestChangePasswordBody) => {
        dispatch(changePasswordThunk({ password, confirmPassword }))
            .unwrap()
            .catch((error: Error) => {
                console.log('Change-password', error);
            });
    };

    return (
        <AppForm type='confirm' form={form} onFinish={onFinish}>
            <AppInputPassword
                classNames='input-password'
                autoComplete={''}
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
