import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';

import { HomePage } from '@pages/home-page';
import { BaseLayout } from '@app/layouts';

import { PathConfig } from '@shared/config';

export const appRouter = () =>
    createHashRouter(
        createRoutesFromElements(
            <Route path={PathConfig.HOME} element={<BaseLayout />}>
                <Route path={PathConfig.HOME} element={<HomePage />} />{' '}
            </Route>,
        ),
    );
