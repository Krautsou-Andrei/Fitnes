import { ReactElement } from 'react';
import { Navigate } from 'react-router';

import { selectIsAuthorized } from '@entities/session';
import { useAppSelector } from '@shared/hooks';
import { LocalStorageConfig, PathConfig } from '@shared/config';

type AuthGuardProps = {
    children: ReactElement;
};

export function AuthGuard({ children }: AuthGuardProps) {
    const isAuthorized =
        useAppSelector(selectIsAuthorized) || localStorage.getItem(LocalStorageConfig.ACCESS_TOKEN);

    if (!isAuthorized) {
        return <Navigate to={PathConfig.AUTH} />;
    }

    return children;
}
