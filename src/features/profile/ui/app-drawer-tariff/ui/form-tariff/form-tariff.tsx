import { Form, Radio, Space, Typography, type FormProps } from 'antd';

import { SettingsConfig } from '@features/profile/config';
import { Tariff } from '@entities/profile';

import styles from './form-tariff.module.less';

const { Text } = Typography;

type FormTariffProps = FormProps & {
    tariffList: Tariff[];
};

export function FormTariff({ tariffList, ...rest }: FormTariffProps) {
    return (
        <div className={styles['form-tariff']}>
            <Text className={styles['form-tariff-title']}>{SettingsConfig.TITLE_TARIFF_FORM}</Text>
            <Form id='form-tariff' {...rest}>
                <Form.Item name={SettingsConfig.INPUT_TYPE_RADIO}>
                    <Radio.Group name='radio-tariff' size='large'>
                        <Space direction='vertical'>
                            {tariffList[0]?.periods.map((period) => {
                                return (
                                    <Radio
                                        className={styles['radio-label']}
                                        value={period.days}
                                        key={period.text}
                                    >
                                        <div className={styles['radio-label-title']}>
                                            <div className=''>{period.text}</div>
                                            <div className=''>
                                                {String(period.cost).replace('.', ',')} $
                                            </div>
                                        </div>
                                    </Radio>
                                );
                            })}
                        </Space>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </div>
    );
}
