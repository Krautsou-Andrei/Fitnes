import { useMediaQuery } from 'react-responsive';
import { ConstantsMediaQuery } from '@shared/config';

export function useAppMediaQuery() {
    const isQueryXS = useMediaQuery({ maxWidth: ConstantsMediaQuery.XS });
    const isQueryMD = useMediaQuery({ maxWidth: ConstantsMediaQuery.MD });
    const isTablet = useMediaQuery({ maxWidth: ConstantsMediaQuery.APP_TABLET });

    return { isQueryXS, isQueryMD, isTablet };
}
