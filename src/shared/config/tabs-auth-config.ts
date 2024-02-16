import { ItemsTabs } from '@shared/ui/app-tabs/@ex/config';
import { PathConfig } from './path-config';

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
