import { Email, Password } from '@shared/types/app';

export type RequestLoginBody = {
    email: Email;
    password: Password;
};

export type RequestRegisterBody = RequestLoginBody & {
    passwordConfirm?: Password;
};

export type SessionLoginDto = {
    accessToken: string;
};

export type SessionCheckEmailDto = {
    email: Email;
    message: string;
};

export type SessionConfirmEmailDto = {
    email: Email;
    message: string;
};

export type SessionChangePasswordDto = {
    message: string;
};
