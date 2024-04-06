import { useLocation } from 'react-router-dom';
import { push } from 'redux-first-history';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { selectGetInvities } from '@entities/invite';

export function useAppTabs() {
    const { pathname } = useLocation();
    const invities = useAppSelector(selectGetInvities);
    const dispatch = useAppDispatch();

    const countInvities = invities.length;
    
    const onTabClick = (activeKey: string) => {
        if (pathname !== activeKey) {
            dispatch(push(activeKey));
        }
    };

    return { countInvities, pathname, onTabClick };
}
