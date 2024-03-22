import { TariffUser } from '../model/types';
import { Email, Password } from '@shared/types/app';

export type UserDto = {
    email: Email;
    firstName: string;
    lastName: string;
    birthday: string;
    imgSrc: string;
    readyForJointTraining: boolean;
    sendNotification: boolean;
    tariff?: TariffUser;
};

export type RequestUserUpdateBody = {
    email: Email;
    firstName: string;
    lastName: string;
    birthday: string;
    imgSrc: string;
    readyForJointTraining: boolean;
    sendNotification: boolean;
    password?: Password;
};

export type TariffDto = {
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
