import { ReactElement } from 'react';
import { Navigate } from 'react-router';

import { selectIsAuthorized } from '@entities/session';
import { useAppSelector } from '@shared/hooks';
import { LocalStorageConfig, PathConfig } from '@shared/config';
import { getLocalStorage } from '@shared/lib';

type GuestGuardProps = {
    children: ReactElement;
};

export function GuestGuard({ children }: GuestGuardProps) {
    const isAuthorized =
        useAppSelector(selectIsAuthorized) || getLocalStorage(LocalStorageConfig.ACCESS_TOKEN);

    if (isAuthorized) {
        return <Navigate to={PathConfig.HOME} />;
    }

    return children;
}
