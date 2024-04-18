import { achievementsTabsConfig, trainingsTabsConfig } from '../config';

import { usePageIsEqual } from '@shared/hooks';

export function useAppTabsTrainings() {
    const { isAchievements } = usePageIsEqual();

    const tabs = isAchievements ? achievementsTabsConfig : trainingsTabsConfig;

    return {
        state: { tabs },
    };
}
