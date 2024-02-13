import { useMediaQuery } from 'react-responsive';

import { ConstantsMediaQuery } from '@shared/config';

export function useButtonMediaQuery() {
    const isTablet = useMediaQuery({ maxWidth: ConstantsMediaQuery.APP_TABLET });
    const isQueryMD = useMediaQuery({ maxWidth: ConstantsMediaQuery.MD });

    const buttonType = isQueryMD ? 'default' : 'text';

    return { isTablet, isQueryMD, buttonType };
}
