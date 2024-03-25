import { DataTestIdConfig } from '@shared/config';

export const enum SettingsConfig {
    BUTTON_BUY = 'Выбрать и оплатить',
    INPUT_TYPE_FOR_JOINT_TRAINING = 'jointTraining',
    INPUT_TYPE_NOTIFICATiON = 'notification',
    INPUT_TYPE_RADIO = 'radioGroupe',
    INPUT_TYPE_THEME = 'theme',
    TEXT_ACTIVE_TARIFF = 'Ваш PRO tarif активен до',
    TITLE_COMPARE_TARIFF = 'Сравнить тарифы',
    TITLE_TARIFF_FORM = 'Стоимость тарифа',
}

export const SettingsOptionsConfig = [
    {
        ID: 1,
        NAME: SettingsConfig.INPUT_TYPE_FOR_JOINT_TRAINING,
        TITLE_SETTING: 'Открыт для совместных тренировок',
        TITLE_SETTING_MOBILE: 'Открыт для совместных\n тренировок',
        TITLE_TOOLTIP: 'включеная функция позволит участвовать в совместных тренировках',
        DATA_TEST_SWITCH: DataTestIdConfig.TARIFF_TRAININGS,
        DATA_TEST_ICON: DataTestIdConfig.TARIFF_TRAININGS_ICON,
    },
    {
        ID: 2,
        NAME: SettingsConfig.INPUT_TYPE_NOTIFICATiON,
        TITLE_SETTING: 'Уведомления',
        TITLE_TOOLTIP: 'включеная функция позволит получать уведомления об активностях',
        DATA_TEST_SWITCH: DataTestIdConfig.TARIFF_NOTIFICATION,
        DATA_TEST_ICON: DataTestIdConfig.TARIFF_NOTIFICATION_ICON,
    },
    {
        ID: 3,
        NAME: SettingsConfig.INPUT_TYPE_THEME,
        TITLE_SETTING: 'Тёмная тема',
        TITLE_TOOLTIP: 'темная тема доступна для PRO tarif',
        DATA_TEST_SWITCH: DataTestIdConfig.TARIFF_THEME,
        DATA_TEST_ICON: DataTestIdConfig.TARIFF_THEME_ICON,
    },
];
