import { useEffect, useState } from 'react';
import { selectIsCollapsed } from '@widgets/app-sider';

import { useAppMediaQuery, useAppSelector } from '@shared/hooks';
import { STYLES } from '@shared/config/constants';

export function useMainWidth() {
    const { isQueryMD } = useAppMediaQuery();
    const isCollapsed = useAppSelector(selectIsCollapsed);
    const [styleCollapsed, setStyleCollapsed] = useState((): { [key: string]: string } =>
        !isQueryMD ? STYLES.NO_COLLAPSED : {},
    );

    useEffect(() => {
        if (!isQueryMD) {
            isCollapsed
                ? setStyleCollapsed(STYLES.COLLAPSED)
                : setStyleCollapsed(STYLES.NO_COLLAPSED);

            return;
        }
        setStyleCollapsed({});
    }, [isCollapsed, isQueryMD]);

    return { styleCollapsed };
}
