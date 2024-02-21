import { ReactElement } from 'react';
import { Email } from '@shared/types/app';

export type ConfirmEmailCard = {
    description: (email: Email) => string;
    icon: ReactElement;
    title: string;
    placeholder: string;
};

export type CheckEmailParams = {
    email: Email;
};
