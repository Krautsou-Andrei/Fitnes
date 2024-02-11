import { useMediaQuery } from 'react-responsive';

export function useSiderQuery() {
    const isTablet = useMediaQuery({ maxWidth: 768 });

    const width = isTablet ? '106' : '208';
    const widthCollapsed = isTablet ? '0' : '64';

    return { isTablet, width, widthCollapsed };
}
