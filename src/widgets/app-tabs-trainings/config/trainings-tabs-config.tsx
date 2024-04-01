import { AppMyWorkouts } from '@features/my-trainings/ui';
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
        children: <div />,
    },
    {
        label: 'Марафоны',
        key: 'marathons',
        children: <div />,
    },
];
