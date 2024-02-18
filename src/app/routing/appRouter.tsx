import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthLayout, BaseLayout } from '@app/layouts';
import { WithLoader } from '@app/providers';

import { WithErrorBoundary } from '@shared/providers';
import { PathConfig } from '@shared/config';

const HomePage = lazy(() => import('@pages/home-page'));
const RegisterPage = lazy(() => import('@pages/register-page'));
const AuthentificationPage = lazy(() => import('@pages/authentification-page'));
const ResultPage = lazy(() => import('@pages/result-page'));

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
                <Route path={PathConfig.AUTH} element={<AuthentificationPage />} />
                <Route path={PathConfig.REGISTRATION} element={<RegisterPage />} />
                <Route path={PathConfig.RESULT_ERROR} element={<ResultPage type='error' />} />
                <Route
                    path={PathConfig.RESULT_ERROR_CHANGE_PASSWOED}
                    element={<ResultPage type='errorChangePassword' />}
                />
                <Route
                    path={PathConfig.RESULT_ERROR_CHECK_EMAIL}
                    element={<ResultPage type='errorCheckEmail' />}
                />
                <Route
                    path={PathConfig.RESULT_ERROR_CHECK_EMAIL_NO_EXIST}
                    element={<ResultPage type='errorCheckEmailNoExist' />}
                />
                <Route
                    path={PathConfig.RESULT_ERROR_LOGIN}
                    element={<ResultPage type='errorLogin' />}
                />
                <Route
                    path={PathConfig.RESULT_ERROR_USER_EXIST}
                    element={<ResultPage type='errorUserExist' />}
                />
                <Route path={PathConfig.RESULT_SUCCESS} element={<ResultPage type='success' />} />
                <Route
                    path={PathConfig.RESULT_SUCCESS_CHANGE_PASSWORD}
                    element={<ResultPage type='successChangePassword' />}
                />
            </Route>
        </Routes>
    );
}
