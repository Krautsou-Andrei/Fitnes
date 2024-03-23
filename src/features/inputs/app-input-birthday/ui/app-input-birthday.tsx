import { DatePicker, Form } from 'antd';
import { CalendarTwoTone } from '@ant-design/icons';

import { DateFormatConfig, locale } from '@shared/config';
import { STYLES } from '@shared/config/constants';

import styles from './app-input-birthday.module.less';

type AppInputBirthdayProps = {
    name?: string;
    placeholder?: string;
};

export function AppInputBirthday({ name, placeholder }: AppInputBirthdayProps) {
    return (
        <Form.Item className={styles['input-birthday']} name={name}>
            <DatePicker
                format={DateFormatConfig.FORMAT_DD_MN_YYYY_DOT}
                locale={locale}
                placeholder={placeholder}
                suffixIcon={
                    <CalendarTwoTone
                        twoToneColor={[STYLES.DATE_PICKER_COLOR, STYLES.DATE_PICKER_COLOR]}
                    />
                }
            ></DatePicker>
        </Form.Item>
    );
}
