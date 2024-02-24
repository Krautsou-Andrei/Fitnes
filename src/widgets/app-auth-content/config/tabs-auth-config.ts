import { PathConfig } from '@shared/config';
import { ItemsTabs } from '@shared/ui/app-tabs/@ex/config';

export const tabsAuthConfig: ItemsTabs[] = [
    {
        key: `${PathConfig.AUTH}`,
        tab: 'Вход',
    },
    {
        key: `${PathConfig.REGISTRATION}`,
        tab: 'Регистрация',
    },
];
