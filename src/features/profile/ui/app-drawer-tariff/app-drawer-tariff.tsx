import { Drawer, Space, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { useAppDrawerTariff } from './hooks';

import { AppButtonBuy } from './ui/app-button-buy';
import { TableCompare } from './ui/table-compare';
import { FormTariff } from './ui/form-tariff';

import { SettingsConfig } from '@features/profile/config';

import styles from './app-drawer-tariff.module.less';

const { Title } = Typography;

type AppDrawerProps = {
    isOpen: boolean;
    onClickClose: () => void;
};

export function AppDrawerTariff({ isOpen, onClickClose }: AppDrawerProps) {
    const { form, isDisabledSubmit, tariffList, onHandleChange, onHandleFinish } =
        useAppDrawerTariff();

    return (
        <Drawer
            mask={false}
            className={styles['app-drawer']}
            open={isOpen}
            onClose={onClickClose}
            closeIcon={<CloseOutlined />}
            extra={
                <Space>
                    <Title level={4}>{SettingsConfig.TITLE_COMPARE_TARIFF}</Title>
                </Space>
            }
            footer={<AppButtonBuy disabled={isDisabledSubmit} />}
        >
            <div className={styles.empty} />
            <div className={styles['form-wrapper']}>
                <TableCompare />
                <FormTariff
                    form={form}
                    onChange={onHandleChange}
                    onFinish={onHandleFinish}
                    tariffList={tariffList}
                />
            </div>
        </Drawer>
    );
}
