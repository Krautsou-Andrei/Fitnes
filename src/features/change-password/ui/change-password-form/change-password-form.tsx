import { AppInputConfirmPassword, AppInputPassword } from '@features/inputs';
import { AppForm } from '@shared/ui';
import { Form } from 'antd';



export function ChangePasswordForm() {
    const [form] = Form.useForm();

    return (
        <AppForm type='confirm' form={form}>
            <AppInputPassword classNames='input-password' autoComplete={''} type={'register'} />
            <AppInputConfirmPassword className='input-password'/>
        </AppForm>
    );
}
