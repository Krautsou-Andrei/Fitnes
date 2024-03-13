import { useAppMediaQuery, usePageIsEqual } from '@shared/hooks';

export function useButtonMediaQuery() {
    const { isQueryMD, isTablet } = useAppMediaQuery();
    const { isCalendar } = usePageIsEqual();

    const buttonTypeCalendar = 'text';
    const buttonTypeHome = isQueryMD ? 'default' : 'text';

    const buttonType = isCalendar ? buttonTypeCalendar : buttonTypeHome;

    return { isTablet, isQueryMD, buttonType };
}
