import { ReactNode } from 'react';

/**
 * Type aliases
 */
export type Phone = string;

export type Email = string;

export type Password = string;

export type Id = number;

export type ButtonLink = {
    href: string;
    icon: ReactNode;
    title: string;
};

export const enum TypePage {
    CONFIRM_EMAIL = 'confirmEmail',
    ERROR = 'error',
    ERROR_CHANGE_PASSWORD = 'errorChangePassword',
    ERROR_CHECK_EMAIL = 'errorCheckEmail',
    ERROR_CHECK_EMAIL_NO_EXIST = 'errorCheckEmailNoExist',
    ERROR_LOGIN = 'errorLogin',
    ERROR_USER_EXIST = 'errorUserExist',
    SUCCESS = 'success',
    SUCCESS_CHANGE_PASSWORD = 'successChangePassword',
}

export type ResultPageType = {
    type:
        | TypePage.ERROR
        | TypePage.ERROR_CHANGE_PASSWORD
        | TypePage.ERROR_CHECK_EMAIL
        | TypePage.ERROR_CHECK_EMAIL_NO_EXIST
        | TypePage.ERROR_LOGIN
        | TypePage.ERROR_USER_EXIST
        | TypePage.SUCCESS
        | TypePage.SUCCESS_CHANGE_PASSWORD;
};
