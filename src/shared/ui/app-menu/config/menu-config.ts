import React from 'react';
import { CalendarOutlined, HeartFilled, TrophyFilled, IdcardOutlined } from '@ant-design/icons';

import type { MenuItem } from '../model/types';
import { PathConfig } from '@shared/config';

export const menuConfig: MenuItem[] = [
    {
        id: 1,
        icon: React.createElement(CalendarOutlined),
        link: PathConfig.CALENDAR,
        title: 'Календарь',
    },
    {
        id: 2,
        icon: React.createElement(HeartFilled),
        link: '/',
        title: 'Тренировки',
    },
    {
        id: 3,
        icon: React.createElement(TrophyFilled),
        link: '/',
        title: 'Достижения',
    },
    {
        id: 4,
        icon: React.createElement(IdcardOutlined),
        link: PathConfig.PROFILE,
        title: 'Профиль',
    },
];
