import { ReactElement, useEffect } from 'react';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';

import { selectIsAuthorized } from '@entities/session';
import { useAppSelector } from '@shared/hooks';
import { LocalStorageConfig, PathConfig } from '@shared/config';
import { getLocalStorage, setLocalStorage } from '@shared/lib';

type AuthGuardProps = {
    children: ReactElement;
};

export function AuthGuard({ children }: AuthGuardProps) {
    const location = useLocation();
    const accessToken = new URLSearchParams(location.search).get('accessToken');

    useEffect(() => {
        if (accessToken) {
            setLocalStorage(LocalStorageConfig.ACCESS_TOKEN, accessToken);
        }
    }, [accessToken]);

    const isAuthorized =
        useAppSelector(selectIsAuthorized) || getLocalStorage(LocalStorageConfig.ACCESS_TOKEN);

    if (!isAuthorized) {
        return <Navigate to={PathConfig.AUTH} />;
    }

    return children;
}
