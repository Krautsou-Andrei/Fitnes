import { Email } from '@shared/types/app';

export type SessionLoginType = {
    accessToken: string;
};

export type SessionRegisterType = {
    accessToken?: string;
};

export type SessionCheckEmaiType = {
    email: Email;
    message: string;
};

export type SessionConfirmEmailType = {
    email: Email;
    message: string;
};

export type SessionChangePasswordType = {
    message: string;
};
