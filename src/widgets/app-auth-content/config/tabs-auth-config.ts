import { PathConfig } from '@shared/config';
import { ItemsTabs } from '@shared/ui/app-tabs/@ex/config';

export const tabsAuthConfig: ItemsTabs[] = [
    {
        key: `${PathConfig.AUTH}`,
        label: 'Вход',
    },
    {
        key: `${PathConfig.REGISTRATION}`,
        label: 'Регистрация',
    },
];
