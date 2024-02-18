import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthLayout, BaseLayout } from '@app/layouts';
import { WithLoader } from '@app/providers';

import { WithErrorBoundary } from '@shared/providers';
import { PathConfig } from '@shared/config';

const HomePage = lazy(() => import('@pages/home-page'));
const PageRegister = lazy(() => import('@pages/page-register'));
const PageAuthentification = lazy(() => import('@pages/page-authentification'));

export function AppRouter() {
    return (
        <Routes>
            <Route
                path={PathConfig.BASE}
                element={
                    <WithErrorBoundary>
                        <WithLoader>
                            <BaseLayout />
                        </WithLoader>
                    </WithErrorBoundary>
                }
            >
                <Route path={PathConfig.BASE} element={<Navigate to={PathConfig.HOME} />} />
                <Route path={PathConfig.HOME} element={<HomePage />} />
            </Route>
            <Route
                element={
                    <WithErrorBoundary>
                        <WithLoader>
                            <AuthLayout />
                        </WithLoader>
                    </WithErrorBoundary>
                }
            >
                <Route path={PathConfig.AUTH} element={<PageAuthentification />} />
                <Route path={PathConfig.REGISTRATION} element={<PageRegister />} />
                <Route path={PathConfig.RESULT_ERROR} element={<AuthLayout />} />
            </Route>
        </Routes>
    );
}
