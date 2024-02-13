import { useMediaQuery } from 'react-responsive';
import { ConstantsMediaQuery } from '@shared/config';

export function useSiderMediaQuery() {
    const isQueryMD = useMediaQuery({ maxWidth: ConstantsMediaQuery.MD });
    const isTablet = useMediaQuery({ maxWidth: ConstantsMediaQuery.APP_TABLET});

    const width = isQueryMD ? '106' : '208';
    const widthCollapsed = isQueryMD ? '0' : '64';    

    return { isQueryMD, isTablet, width, widthCollapsed };
}
