import { useEffect } from 'react';
import { useLazyGetUserQuery } from '@entities/profile';
import { useLazyGetInvitiesQuery } from '@entities/invite';

export function useBaseLayout() {
    const [getUser] = useLazyGetUserQuery();
    const [getInvities] = useLazyGetInvitiesQuery();

    useEffect(() => {
        getUser();
    }, [getUser]);

    useEffect(() => {
        getInvities();
    }, [getInvities]);
}
