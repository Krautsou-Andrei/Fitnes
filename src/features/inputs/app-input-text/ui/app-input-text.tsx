import { Form, Input } from 'antd';

import styles from './app-input-text.module.less';

type AppInputTextProps = {
    name?: string;
    placeholder?: string;
    dataTestId?: string;
};

export function AppInputText({ name, placeholder, dataTestId }: AppInputTextProps) {
    return (
        <Form.Item className={styles['input-text']} name={name}>
            <Input type='text' placeholder={placeholder} data-test-id={dataTestId} />
        </Form.Item>
    );
}
