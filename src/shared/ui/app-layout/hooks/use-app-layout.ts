import { usePageIsEqual } from '@shared/hooks';
import { useMainWidth } from '@shared/hooks/@ex/app-layout';

export function useAppLayout() {
    const { styleCollapsed } = useMainWidth();
    const { isAchievements, isCalendar, isTrainings } = usePageIsEqual();

    return { isAchievements, isCalendar, isTrainings, styleCollapsed };
}
