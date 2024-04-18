import { useMediaQuery } from 'react-responsive';
import { ConstantsMediaQuery } from '@shared/config';

export function useAppMediaQuery() {
    const isQueryXL = useMediaQuery({ maxWidth: ConstantsMediaQuery.XL });
    const isQueryXS = useMediaQuery({ maxWidth: ConstantsMediaQuery.XS });
    const isQueryMD = useMediaQuery({ maxWidth: ConstantsMediaQuery.MD });
    const isQuerySM =  useMediaQuery({ maxWidth: ConstantsMediaQuery.SM });
    const isTablet = useMediaQuery({ maxWidth: ConstantsMediaQuery.APP_TABLET });

    return { isQueryXL, isQueryXS, isQueryMD,isQuerySM , isTablet };
}
