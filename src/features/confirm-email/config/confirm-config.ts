import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';

import { ConfirmPageConfig } from './confirm-page-config';
import type { ConfirmEmailCard } from '../model/types';

import type { Email } from '@shared/types/app';

type ConfirmConfig = {
    [key in ConfirmPageConfig]: ConfirmEmailCard;
};

export const confirmConfig: ConfirmConfig = {
    [ConfirmPageConfig.CONFIRM_EMAIL]: {
        description: (email: Email) =>
            `Мы отправили вам на e-mail ${email} шестизначный код. Введите его в поле ниже.`,
        icon: React.createElement(ExclamationCircleFilled),
        title: 'Введите код\n для восстановления аккауанта',
        placeholder: 'Не пришло письмо? Проверьте папку Спам.',
    },
};
