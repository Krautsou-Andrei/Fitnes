import { useAppMediaQuery } from '@shared/hooks';

export function useButtonMediaQuery() {
    const { isQueryMD, isTablet } = useAppMediaQuery();

    const buttonType = isQueryMD ? 'default' : 'text';

    return { isTablet, isQueryMD, buttonType };
}
