import { Email } from '@shared/types/app';

export type TariffUser = {
    tariffId: string;
    expired: string;
};

export type User = {
    email: Email;
    firstName: string;
    lastName: string;
    birthday: string;
    imgSrc: string;
    readyForJointTraining: boolean;
    sendNotification: boolean;
    tariff?: TariffUser;
};

export type Tariff = {
    name: string;
    periods: [
        {
            text: string;
            cost: 0;
            days: 0;
        },
    ];
    id?: string;
};
