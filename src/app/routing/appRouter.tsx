import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';

import { AuthLayout, BaseLayout } from '@app/layouts';

import { HomePage } from '@pages/home-page';
import { PageRegister } from '@pages/page-register';

import { WithErrorBoundary } from '@shared/providers';
import { PathConfig } from '@shared/config';

export function appRouter() {
    return createHashRouter(
        createRoutesFromElements([
            <Route
                path={PathConfig.HOME}
                element={
                    <WithErrorBoundary>
                        <BaseLayout />
                    </WithErrorBoundary>
                }
            >
                <Route path={PathConfig.HOME} element={<HomePage />} />
            </Route>,
            <Route
                path={PathConfig.REGISTRATION}
                element={
                    <WithErrorBoundary>
                        <AuthLayout />
                    </WithErrorBoundary>
                }
            >
                <Route path={PathConfig.REGISTRATION} element={<PageRegister />} />
            </Route>,
        ]),
    );
}
