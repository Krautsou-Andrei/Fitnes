import { Button, Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import { tariffImage } from '@pages/settings-page/config';
import { SettingsPageConfig } from '@pages/settings-page/config';

import { AppCard } from '@shared/ui';

import styles from './app-tariff-card.module.less';
import { DataTestIdConfig } from '@shared/config';

const { Title } = Typography;

type AppTariffCardProps = {
    title: string;
    onClickButtonMore: () => void;
    isActive?: boolean;
    activeDays?: string;
    isActivePro?: boolean;
};

export function AppTariffCard({
    title,
    onClickButtonMore,
    isActive,
    activeDays,
    isActivePro,
}: AppTariffCardProps) {
    return (
        <AppCard
            data-test-id={isActive ? '' : DataTestIdConfig.PRO_TARIFF_CARD}
            className={styles['tariff-card']}
            title={`${title} ${SettingsPageConfig.TITLE_CADR_TARIFF}`}
            extra={
                <Button type='link' className={styles['button-more']} onClick={onClickButtonMore}>
                    {SettingsPageConfig.BUTTON_MORE_TEXT}
                </Button>
            }
            cover={
                <img
                    className={isActive || isActivePro ? '' : styles['imageNoActive']}
                    src={tariffImage[title]}
                />
            }
        >
            {isActive && (
                <Title level={5} className={styles['tariff-card-text-active']}>
                    {SettingsPageConfig.TEXT_ACTIVE}
                    <CheckOutlined />
                </Title>
            )}

            {!isActivePro && !isActive && (
                <Button
                    type='primary'
                    className={styles.button}
                    onClick={onClickButtonMore}
                    data-test-id={DataTestIdConfig.ACTIVATE_TARIFF_BTN}
                >
                    {SettingsPageConfig.BUTTON_TEXT}
                </Button>
            )}
            {isActivePro && !isActive && (
                <Title level={5} className={styles['tariff-card-text-active-period']}>
                    {SettingsPageConfig.TEXT_ACTIVE}
                    <div>{activeDays}</div>
                </Title>
            )}
        </AppCard>
    );
}
