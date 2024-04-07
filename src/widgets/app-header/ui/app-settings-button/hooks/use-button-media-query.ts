import { useAppMediaQuery, usePageIsEqual } from '@shared/hooks';

export function useButtonMediaQuery() {
    const { isQueryMD, isTablet } = useAppMediaQuery();
    const { isCalendar, isProfile, isTrainings } = usePageIsEqual();

    const buttonTypeCalendar = 'text';
    const buttonTypeHome = isQueryMD ? 'default' : 'text';

    const buttonType = isCalendar || isProfile || isTrainings ? buttonTypeCalendar : buttonTypeHome;

    return { isTablet, isQueryMD, buttonType };
}
