import { selectIsProfile } from '@entities/profile';
import { getUserThunk } from '@features/profile';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';
import { useEffect } from 'react';

export function useHomePage() {
    const isProfile = useAppSelector(selectIsProfile);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let ignore = false;
        if (!isProfile && !ignore) {
            dispatch(getUserThunk()).catch((error: unknown) => {
                showErrorForDevelop('Get User', error);
            });
        }

        return () => {
            ignore = true;
        };
    }, [dispatch, isProfile]);
}
