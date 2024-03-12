import { useEffect, useState } from 'react';

import { useSiderMediaQuery } from './use-sider-media-query';
import { siderActions } from '../model/slice';

import { useAppDispatch } from '@shared/hooks';

export function useAppSider() {
    const { isQueryMD, width, widthCollapsed } = useSiderMediaQuery();
    const [isCollapsed, isSetCollapsed] = useState(isQueryMD ? true : false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(siderActions.setIsCollapsed(isCollapsed));
        if (isQueryMD) {
            isSetCollapsed(true);
        }
    }, [dispatch, isCollapsed, isQueryMD]);

    return { isCollapsed, isSetCollapsed, isQueryMD, width, widthCollapsed };
}
