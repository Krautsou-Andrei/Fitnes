import { AppGroupWorkouts, AppMarathons, AppMyWorkouts } from '@features/traning';

import { ItemsTabs } from '@shared/ui';

export const trainingsTabsConfig: ItemsTabs[] = [
    {
        label: 'Мои тренировки',
        key: 'workouts',
        children: <AppMyWorkouts />,
    },
    {
        label: 'Совместные тренировки',
        key: 'workouts-group',
        children: <AppGroupWorkouts />,
        badge: true,
    },
    {
        label: 'Марафоны',
        key: 'marathons',
        children: <AppMarathons />,
    },
];
