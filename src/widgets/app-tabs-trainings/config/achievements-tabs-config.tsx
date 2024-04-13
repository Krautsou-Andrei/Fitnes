import { AppWeekAchievements } from '@features/achievements';
import { AchievementsKeyConfig } from '@shared/config';

import type { ItemsTabs } from '@shared/ui';

export const achievementsTabsConfig: ItemsTabs[] = [
    {
        label: 'За неделю',
        key: AchievementsKeyConfig.ONE_WEEK,
        children: <AppWeekAchievements />,
    },
    {
        label: 'За месяц',
        key: AchievementsKeyConfig.ONE_MONTH,
        children: <div />,
    },
    {
        label: 'За все время (PRO)',
        key: AchievementsKeyConfig.ALL_TIME,
        children: <div />,
    },
];
