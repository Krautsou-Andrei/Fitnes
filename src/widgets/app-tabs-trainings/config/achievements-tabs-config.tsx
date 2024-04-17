import { AppAchievements } from '@features/achievements';
import { AchievementsDefaultConfig, AchievementsKeyConfig } from '@shared/config';

import type { ItemsTabs } from '@shared/ui';

export const achievementsTabsConfig: ItemsTabs[] = [
    {
        label: 'За неделю',
        key: AchievementsKeyConfig.ONE_WEEK,
        children: (
            <AppAchievements isMonth={false} days={AchievementsDefaultConfig.NUMBERS_DAYS_WEEK} />
        ),
    },
    {
        label: 'За месяц',
        key: AchievementsKeyConfig.ONE_MONTH,
        children: (
            <AppAchievements isMonth={true} days={AchievementsDefaultConfig.NUMBERS_DAYS_MONTH} />
        ),
    },
    {
        label: 'За все время (PRO)',
        key: AchievementsKeyConfig.ALL_TIME,
        children: <div />,
        disabled: true,
    },
];
