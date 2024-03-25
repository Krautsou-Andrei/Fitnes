import { useEffect } from 'react';
import { useLazyGetUserQuery } from '@entities/profile';

export function useBaseLayout() {
    const [getUser] = useLazyGetUserQuery();

    useEffect(() => {
        getUser();
    }, [getUser]);
}
