import { Checkbox, Form } from 'antd';
import Link from 'antd/lib/typography/Link';

import { LayoutConfig } from '@shared/config';

import styles from './app-remember.module.less';

export function AppRemember() {
    return (
        <Form.Item className={styles.remember}>
            <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>{LayoutConfig.CHECKBOX_REMEMBER_ME}</Checkbox>
            </Form.Item>

            <Link className={styles['login-form-forgot']} href=''>
                {LayoutConfig.LINK_FORGOT_PASSWORD}
            </Link>
        </Form.Item>
    );
}
