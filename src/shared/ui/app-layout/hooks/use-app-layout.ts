import { ConstantsMediaQuery } from '@shared/config';
import { useAppMediaQuery, useAppSelector } from '@shared/hooks';
import { selectIsCollapsed } from '@widgets/app-sider';
import { useEffect, useState } from 'react';

const collapsed = {
    marginLeft: `${ConstantsMediaQuery.COLLAPSED}px`,
    transition: 'margin-left 0.2s ease',
};

const noCollapsed = {
    marginLeft: `${ConstantsMediaQuery.COLLAPSED_NO}px`,
    transition: 'margin-left 0.2s ease',
};

export function useAppLayout() {
    const { isQueryMD } = useAppMediaQuery();
    const isCollapsed = useAppSelector(selectIsCollapsed);
    const [styleCollapsed, setStyleCollapsed] = useState((): { [key: string]: string } =>
        !isQueryMD ? noCollapsed : {},
    );

    useEffect(() => {
        if (!isQueryMD) {
            isCollapsed ? setStyleCollapsed(collapsed) : setStyleCollapsed(noCollapsed);

            return;
        }
        setStyleCollapsed({});
    }, [isCollapsed, isQueryMD]);

    return { styleCollapsed };
}
