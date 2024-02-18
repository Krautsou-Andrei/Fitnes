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

export type ResultPageType = {
    type:
        | 'error'
        | 'errorChangePassword'
        | 'errorCheckEmail'
        | 'errorCheckEmailNoExist'
        | 'errorLogin'
        | 'errorUserExist'
        | 'success'
        | 'successChangePassword';
};
