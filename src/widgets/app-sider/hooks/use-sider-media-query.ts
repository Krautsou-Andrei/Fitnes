import { ConstantsMediaQuery } from '@shared/config';
import { useAppMediaQuery } from '@shared/hooks';

export function useSiderMediaQuery() {
    const { isQueryMD, isTablet } = useAppMediaQuery();

    const width = isQueryMD
        ? ConstantsMediaQuery.COLLAPSED_NO_MD
        : ConstantsMediaQuery.COLLAPSED_NO;
    const widthCollapsed = isQueryMD
        ? ConstantsMediaQuery.COLLAPSED_MD
        : ConstantsMediaQuery.COLLAPSED;

    return { isQueryMD, isTablet, width, widthCollapsed };
}
