import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';

import { BaseLayout } from '@app/layouts';
import { HomePage } from '@pages/home-page';

import { WithErrorBoundary } from '@shared/providers';
import { PathConfig } from '@shared/config';

export function appRouter() {
    return createHashRouter(
        createRoutesFromElements(
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
        ),
    );
}
