import { useAppMediaQuery, usePageIsEqual } from '@shared/hooks';

export function useButtonMediaQuery() {
    const { isQueryMD, isTablet } = useAppMediaQuery();
    const { isAchievements, isCalendar, isProfile, isTrainings } = usePageIsEqual();

    const buttonTypeCalendar = 'text';
    const buttonTypeHome = isQueryMD ? 'default' : 'text';

    const buttonType =
        isAchievements || isCalendar || isProfile || isTrainings
            ? buttonTypeCalendar
            : buttonTypeHome;

    return { isTablet, isQueryMD, buttonType };
}
