import { ItemsTabs } from '@shared/ui';

export const trainingsTabsConfig: ItemsTabs[] = [
    {
        label: 'Мои тренировки',
        key: 'workouts',
        children: <div />,
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
