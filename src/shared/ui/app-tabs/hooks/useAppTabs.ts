import { useLocation } from 'react-router-dom';
import { push } from 'redux-first-history';

import { WorkoutsConfig } from '@features/traning/config';

import { selectGetInvities } from '@entities/invite';
import { selectPals } from '@entities/training';

import { useAppDispatch, useAppSelector } from '@shared/hooks';

export function useAppTabs() {
    const { pathname } = useLocation();
    const invities = useAppSelector(selectGetInvities);
    const partners = useAppSelector(selectPals);
    const dispatch = useAppDispatch();

    const countInvities = invities.length;
    const isMaxPartners = partners.length >= WorkoutsConfig.MAX_PARTNERS;

    const onTabClick = (activeKey: string) => {
        if (pathname !== activeKey) {
            dispatch(push(activeKey));
        }
    };

    return { countInvities, isMaxPartners, pathname, onTabClick };
}
