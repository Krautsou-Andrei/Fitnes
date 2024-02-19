import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';

import { ConfirmEmailCard } from '@features/confirm-email';

import type { Email } from '@shared/types/app';

interface ConfirmEmailConfig {
    [key: string]: ConfirmEmailCard;
}

export const confirmEmailConfig: ConfirmEmailConfig = {
    confirmEmail: {
        description: (email: Email) =>
            `Мы отправили вам на e-mail ${email} шестизначный код. Введите его в поле ниже.`,
        icon: React.createElement(ExclamationCircleFilled),
        title: 'Введите код для восстановления аккауанта',
        placeholder: 'Не пришло письмо? Проверьте папку Спам.',
    },
};
