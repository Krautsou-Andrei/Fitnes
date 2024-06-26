import React from 'react';
import { CalendarOutlined, HeartFilled, IdcardOutlined } from '@ant-design/icons';

import type { CardActive } from '../ui/app-card-active/model/types';
import type { CardText } from '../ui/app-card-text/model/types';

import { DataTestIdConfig, PathConfig } from '@shared/config';

export const cardsInfoConfig: CardText[] = [
    {
        id: 1,
        title: 'С CleverFit ты сможешь:',
        description: [
            'планировать свои тренировки на календаре выбирая тип и уровень нагрузки;',
            'отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;',
            'создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;',
            'выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.',
        ],
    },
    {
        id: 2,
        title: 'CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!',
    },
];

export const cardsActionsConfig: CardActive[] = [
    {
        id: 1,
        title: 'Расписать тренировки',
        button: {
            icon: React.createElement(HeartFilled),
            href: PathConfig.TRAINING,
            title: 'Тренировки',
        },
        dataTestId: DataTestIdConfig.MENU_BUTTON_TRAINING,
    },
    {
        id: 2,
        title: 'Назначить календарь',
        button: {
            icon: React.createElement(CalendarOutlined),
            href: PathConfig.CALENDAR,
            title: 'Календарь',
        },
        dataTestId: DataTestIdConfig.MENU_BUTTON_CALENDAR,
    },
    {
        id: 3,
        title: 'Заполнить профиль',
        button: {
            icon: React.createElement(IdcardOutlined),
            href: PathConfig.PROFILE,
            title: 'Профиль',
        },
        dataTestId: DataTestIdConfig.MENU_BUTTON_PROFILE,
    },
];
