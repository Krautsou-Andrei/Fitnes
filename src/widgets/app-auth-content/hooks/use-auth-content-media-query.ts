import { useAppMediaQuery } from '@shared/hooks';

export function useAuthContentMediaQuery() {
    const { isQueryXS } = useAppMediaQuery();

    const withLogo = isQueryXS ? 203 : 309;
    const heightLogo = isQueryXS ? 50 : 78;

    return { heightLogo, withLogo };
}
