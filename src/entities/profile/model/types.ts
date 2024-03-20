import { Email } from '@shared/types/app';

export type Tariff = {
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
    tariff?: Tariff;
};
