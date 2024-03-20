import { Tariff } from '../model/types';
import { Email, Password } from '@shared/types/app';

export type UserDto = {
    email: Email;
    firstName: string;
    lastName: string;
    birthday: string;
    imgSrc: string;
    readyForJointTraining: boolean;
    sendNotification: boolean;
    tariff?: Tariff;
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
