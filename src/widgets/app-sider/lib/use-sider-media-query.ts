import { useAppMediaQuery } from '@shared/hooks';

export function useSiderMediaQuery() {
    const { isQueryMD, isTablet } = useAppMediaQuery();

    const width = isQueryMD ? '106' : '208';
    const widthCollapsed = isQueryMD ? '0' : '64';

    return { isQueryMD, isTablet, width, widthCollapsed };
}
