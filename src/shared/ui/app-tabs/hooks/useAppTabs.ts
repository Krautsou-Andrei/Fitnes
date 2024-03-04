import { useLocation } from 'react-router-dom';
import { push } from 'redux-first-history';

import { useAppDispatch } from '@shared/hooks';

export function useAppTabs() {
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();

    const onTabClick = (activeKey: string) => {
        if (pathname !== activeKey) {
            dispatch(push(activeKey));
        }
    };

    return { pathname, onTabClick };
}
