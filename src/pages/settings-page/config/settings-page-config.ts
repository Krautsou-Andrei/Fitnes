import imageFree from '/assets/tariff-free.png';
import imagePro from '/assets/tariff-pro.png';

export const enum SettingsPageConfig {
    BUTTON_FEEDBACK_TEXT = 'Смотреть все отзывы',
    BUTTON_MORE_TEXT = 'Подробнее',
    BUTTON_TEXT = 'Активировать',
    TITLE_FREE_TARIFF = 'Free',
    TITLE_CADR_TARIFF = 'tariff',
    TITLE_TARIFF = 'Мой тариф',
    TEXT_ACTIVE = 'активен',
}

type TariffImageType = {
    [key: string]: string;
};

export const tariffImage: TariffImageType = {
    FREE: imageFree,
    PRO: imagePro,
};

export const freeTariff = {
    name: SettingsPageConfig.TITLE_FREE_TARIFF,
    isActive: true,
};
