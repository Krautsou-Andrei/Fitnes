import { Email, Password } from '@shared/types/app';

export type RequestLoginBody = {
    email: Email;
    password: Password;
    isRemember?: boolean;
};

export type RequestRegisterBody = RequestLoginBody & {
    passwordConfirm?: Password;
};

export type RequestConfirmEmailBody = {
    email: Email;
    code: string;
};

export type RequestChangePasswordBody = {
    password: Password;
    confirmPassword: Password;
};

export type RequestCheckEmailBody = {
    email: Email;
};

export type SessionLoginDto = {
    accessToken: string;
};
