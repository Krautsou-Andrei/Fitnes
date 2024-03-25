import { Content } from 'antd/lib/layout/layout';
import { Typography } from 'antd';
import { AppContentWrapper } from '@shared/ui';

import { useSettingsPage } from '../hooks';
import { SettingsPageConfig, freeTariff } from '../config';
import { AppTariffCard } from './tariff-card';

import { AppButtonFeedbacks, NewFeedbackButton, NewFeedbackModal } from '@features/feedbacks';
import { AppDrawerTariff, SettingsForm } from '@features/profile';

import styles from './settings-page.module.less';

const { Title } = Typography;

export function SettingsPage() {
    const {
        tariffList,
        onClick,
        isQueryXS,
        isOpenDrawer,
        onToggleDrawer,
        activeDays,
        isActivePro,
    } = useSettingsPage();

    const tariffs = [freeTariff, ...tariffList];

    return (
        <Content className={styles['settings-page']}>
            <AppContentWrapper>
                <div className={styles['settings-content']}>
                    <Title level={4}>{SettingsPageConfig.TITLE_TARIFF}</Title>
                    <div className={styles['card-wrapper']}>
                        {tariffs.map((tariff) => {
                            return (
                                <AppTariffCard
                                    key={tariff.name}
                                    title={tariff.name.toUpperCase()}
                                    isActive={tariff.isActive}
                                    activeDays={activeDays}
                                    onClickButtonMore={onToggleDrawer}
                                    isActivePro={isActivePro}
                                />
                            );
                        })}
                    </div>
                    <div className={styles['form-wrapper']}>
                        <SettingsForm />
                    </div>
                    <div className={styles['buttons-wrapper']}>
                        <NewFeedbackButton onClick={onClick} block={isQueryXS} />
                        <AppButtonFeedbacks
                            buttonText={SettingsPageConfig.BUTTON_FEEDBACK_TEXT}
                            block={isQueryXS}
                        />
                    </div>
                </div>
            </AppContentWrapper>
            <NewFeedbackModal />
            <AppDrawerTariff
                isOpen={isOpenDrawer}
                onClickClose={onToggleDrawer}
                activeDays={activeDays}
                isActivePro={isActivePro}
            />
        </Content>
    );
}
