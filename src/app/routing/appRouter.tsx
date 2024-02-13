import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';

import { BaseLayout } from '@app/layouts';
import { HomePage } from '@pages/home-page';

import { PathConfig } from '@shared/config';

export function appRouter() {
    return createHashRouter(
        createRoutesFromElements(
            <Route path={PathConfig.HOME} element={<BaseLayout />}>
                <Route path={PathConfig.HOME} element={<HomePage />} />
            </Route>,
        ),
    );
}
