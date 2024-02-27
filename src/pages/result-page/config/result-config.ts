import React from 'react';
import { CheckCircleFilled, CloseCircleFilled, WarningFilled } from '@ant-design/icons';

import type { ResultCard } from '@features/result';

import { AppIcon } from '@shared/ui';
import { DataTestIdConfig } from '@shared/config';

interface ResultConfig {
    [key: string]: ResultCard;
}

export const resultConfig: ResultConfig = {
    error: {
        buttonBlock: true,
        buttonTitle: 'Повторить',
        description: 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте еще раз',
        icon: React.createElement(CloseCircleFilled),
        title: 'Данные не сохранились',
        testId: DataTestIdConfig.REGISTRATION_RETRY_BUTTON,
    },
    errorChangePassword: {
        buttonBlock: true,
        buttonTitle: 'Повторить',
        description: 'Что-то пошло не так. Попробуйте еще раз',
        icon: React.createElement(CloseCircleFilled),
        title: 'Данные не сохранились',
        testId: DataTestIdConfig.CHANGE_RETRY_BUTTON,
    },
    errorCheckEmail: {
        buttonBlock: false,
        buttonTitle: 'Назад',
        description: 'Произошла ошибка, попробуйте отправить форму еще раз',
        icon: React.createElement(AppIcon, { name: 'result/error_email', width: 253, height: 293 }),
        title: 'Что-то пошло не так',
        testId: DataTestIdConfig.CHECK_BACK_BUTTON,
    },
    errorCheckEmailNoExist: {
        buttonBlock: false,
        buttonTitle: 'Попробовать снова',
        description:
            'Мы не нашли в базе вашего e\u2011mail. Попробуйте войти с другим e\u2011mail.',
        icon: React.createElement(CloseCircleFilled),
        title: 'Такой e-mail не зарегистрирован',
        testId: DataTestIdConfig.CHECK_RETRY_BUTTON,
    },
    errorLogin: {
        buttonBlock: true,
        buttonTitle: 'Повторить',
        description: 'Что-то пошло не так. Попробуйте еще раз',
        icon: React.createElement(WarningFilled),
        title: 'Вход не выполнен',
        testId: DataTestIdConfig.LOGIN_RETRY_BUTTON,
    },
    errorUserExist: {
        buttonBlock: true,
        buttonTitle: 'Назад к регистрации',
        description:
            'Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e\u2011mail',
        icon: React.createElement(CloseCircleFilled),
        title: 'Данные не сохранились',
        testId: DataTestIdConfig.REGISTRATION_BACK_BUTTON,
    },
    success: {
        buttonBlock: true,
        buttonTitle: 'Войти',
        description:
            'Регистрация прошла успешно. Зайдите в приложение, используя свои e\u2011mail и пароль',
        icon: React.createElement(CheckCircleFilled),
        title: 'Регистрация успешна',
        testId: DataTestIdConfig.REGISTRATION_ENTER_BUTTON,
    },
    successChangePassword: {
        buttonBlock: true,
        buttonTitle: 'Войти',
        description: 'Теперь можно войти в аккаунт, используя свой логин и новый пароль',
        icon: React.createElement(CheckCircleFilled),
        title: 'Пароль успешно изменен',
        testId: DataTestIdConfig.CHANGE_ENTRY_BUTTON,
    },
};
