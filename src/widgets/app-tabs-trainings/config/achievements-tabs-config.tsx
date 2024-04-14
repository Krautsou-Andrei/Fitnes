import { AppAchievements } from '@features/achievements';
import { AchievementsKeyConfig } from '@shared/config';

import type { ItemsTabs } from '@shared/ui';

export const achievementsTabsConfig: ItemsTabs[] = [
    {
        label: 'За неделю',
        key: AchievementsKeyConfig.ONE_WEEK,
        children: <AppAchievements />,
    },
    {
        label: 'За месяц',
        key: AchievementsKeyConfig.ONE_MONTH,
        children: <AppAchievements />,
    },
    {
        label: 'За все время (PRO)',
        key: AchievementsKeyConfig.ALL_TIME,
        children: <div />,
    },
];
