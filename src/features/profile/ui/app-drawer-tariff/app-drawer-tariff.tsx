import { Drawer, Space, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { useAppDrawerTariff } from './hooks';

import { AppButtonBuy } from './ui/app-button-buy';
import { TableCompare } from './ui/table-compare';
import { FormTariff } from './ui/form-tariff';

import { SettingsConfig } from '@features/profile/config';

import styles from './app-drawer-tariff.module.less';
import { DataTestIdConfig } from '@shared/config';

const { Title } = Typography;

type AppDrawerProps = {
    isOpen: boolean;
    onClickClose: () => void;
    activeDays?: string;
    isActivePro?: boolean;
};

export function AppDrawerTariff({ isOpen, onClickClose, activeDays, isActivePro }: AppDrawerProps) {
    const { form, isDisabledSubmit, tariffList, onHandleChange, onHandleFinish } =
        useAppDrawerTariff(isOpen);

    return (
        <Drawer
            data-test-id={DataTestIdConfig.TARIFF_SIDER}
            mask={false}
            destroyOnClose={true}
            className={styles['app-drawer']}
            open={isOpen}
            onClose={onClickClose}
            closeIcon={<CloseOutlined />}
            extra={
                <Space>
                    <Title level={4}>{SettingsConfig.TITLE_COMPARE_TARIFF}</Title>
                </Space>
            }
            footer={
                !isActivePro && <AppButtonBuy disabled={isDisabledSubmit} onClick={onClickClose} />
            }
        >
            {isActivePro ? (
                <div
                    className={styles['active-tariff-title']}
                >{`${SettingsConfig.TEXT_ACTIVE_TARIFF} ${activeDays}`}</div>
            ) : (
                <div className={styles.empty} />
            )}

            <div className={styles['form-wrapper']}>
                <TableCompare isActivePro={isActivePro} />
                {!isActivePro && (
                    <FormTariff
                        form={form}
                        onChange={onHandleChange}
                        onFinish={onHandleFinish}
                        tariffList={tariffList}
                    />
                )}
            </div>
        </Drawer>
    );
}
