import { Button, Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import { tariffImage } from '@pages/settings-page/config';
import { SettingsPageConfig } from '@pages/settings-page/config';

import { AppCard } from '@shared/ui';

import styles from './app-tariff-card.module.less';

const { Title } = Typography;

type AppTariffCardProps = {
    title: string;
    onClickButtonMore: () => void;
    isActive?: boolean;
    activeDays?: string;
};

export function AppTariffCard({
    title,
    onClickButtonMore,
    isActive,
    activeDays,
}: AppTariffCardProps) {
    return (
        <AppCard
            className={styles['tariff-card']}
            title={`${title} ${SettingsPageConfig.TITLE_CADR_TARIFF}`}
            extra={
                <Button type='link' className={styles['button-more']} onClick={onClickButtonMore}>
                    {SettingsPageConfig.BUTTON_MORE_TEXT}
                </Button>
            }
            cover={
                <img
                    className={isActive || activeDays ? '' : styles['imageNoActive']}
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

            {!activeDays && !isActive && (
                <Button type='primary' className={styles.button}>
                    {SettingsPageConfig.BUTTON_TEXT}
                </Button>
            )}
            {activeDays && !isActive && (
                <Title level={5} className={styles['tariff-card-text-active-period']}>
                    {SettingsPageConfig.TEXT_ACTIVE}
                    <div>{activeDays}</div>
                </Title>
            )}
        </AppCard>
    );
}
