import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';

import { ConfirmEmailCard } from '@features/confirm-email';

import type { Email } from '@shared/types/app';

interface ConfirmConfig {
    [key: string]: ConfirmEmailCard;
}

export const confirmConfig: ConfirmConfig = {
    confirmEmail: {
        description: (email: Email) =>
            `Мы отправили вам на e-mail ${email} шестизначный код. Введите его в поле ниже.`,
        icon: React.createElement(ExclamationCircleFilled),
        title: 'Введите код\n для восстановления аккауанта',
        placeholder: 'Не пришло письмо? Проверьте папку Спам.',
    },
};
