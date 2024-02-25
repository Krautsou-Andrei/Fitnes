import React from 'react';
import { CalendarOutlined, HeartFilled, TrophyFilled, IdcardOutlined } from '@ant-design/icons';

import { MenuItem } from '../model/types';

export const menuConfig: MenuItem[] = [
    {
        id: 1,
        icon: React.createElement(CalendarOutlined),
        title: 'Календарь',
    },
    {
        id: 2,
        icon: React.createElement(HeartFilled),
        title: 'Тренировки',
    },
    {
        id: 3,
        icon: React.createElement(TrophyFilled),
        title: 'Достижения',
    },
    {
        id: 4,
        icon: React.createElement(IdcardOutlined),
        title: 'Профиль',
    },
];
