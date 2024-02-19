import React from 'react';
import { CheckCircleFilled, CloseCircleFilled, WarningFilled } from '@ant-design/icons';

import { ResultCard } from '@features/result';

import { AppIcon } from '@shared/ui';

interface ResultConfig {
    [key: string]: ResultCard;
}

export const ResultConfig: ResultConfig = {
    error: {
        buttonBlock: true,
        buttonTitle: 'Повторить',
        description: 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте еще раз',
        icon: React.createElement(CloseCircleFilled),
        title: 'Данные не сохранились',
    },
    errorChangePassword: {
        buttonBlock: true,
        buttonTitle: 'Повторить',
        description: 'Что-то пошло не так. Попробуйте еще раз',
        icon: React.createElement(CloseCircleFilled),
        title: 'Данные не сохранились',
    },
    errorCheckEmail: {
        buttonBlock: false,
        buttonTitle: 'Назад',
        description: 'Произошла ошибка, попробуйте отправить форму еще раз',
        icon: React.createElement(AppIcon, { name: 'result/error_email', width: 253, height: 293 }),
        title: 'Что-то пошло не так',
    },
    errorCheckEmailNoExist: {
        buttonBlock: true,
        buttonTitle: 'Попробовать снова',
        description: 'Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail',
        icon: React.createElement(CloseCircleFilled),
        title: 'Такой e-mail не зарегистрирован',
    },
    errorLogin: {
        buttonBlock: true,
        buttonTitle: 'Повторить',
        description: 'Что-то пошло не так. Попробуйте еще раз',
        icon: React.createElement(WarningFilled),
        title: 'Вход не выполнен',
    },
    errorUserExist: {
        buttonBlock: true,
        buttonTitle: 'Назад к регистрации',
        description:
            'Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail',
        icon: React.createElement(CloseCircleFilled),
        title: 'Данные не сохранились',
    },
    success: {
        buttonBlock: true,
        buttonTitle: 'Войти',
        description:
            'Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль',
        icon: React.createElement(CheckCircleFilled),
        title: 'Регистрация успешна',
    },
    successChangePassword: {
        buttonBlock: true,
        buttonTitle: 'Войти',
        description: 'ТТеперь можно войти в аккаунт, используя свой логин и новый пароль',
        icon: React.createElement(CheckCircleFilled),
        title: 'Пароль успешно изменен',
    },
};
