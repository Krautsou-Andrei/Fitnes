import { useMediaQuery } from 'react-responsive';

export function useButtonQuery() {
    const isTablet = useMediaQuery({ maxWidth: 834 });
    const isMobile = useMediaQuery({ maxWidth: 360 });

    const buttonType = isMobile ? 'default' : 'text';

    return { isTablet, isMobile, buttonType };
}
