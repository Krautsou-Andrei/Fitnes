import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthLayout, BaseLayout } from '@app/layouts';
import { WithLoader } from '@app/providers';

import { AuthGuard } from '@features/auth-guard';
import { GuestGuard } from '@features/guest-guard';

import { WithErrorBoundary } from '@shared/providers';
import { PathConfig } from '@shared/config';
import { TypePage } from '@shared/types/app';

const AuthentificationPage = lazy(() => import('@pages/authentification-page'));
const ConfirmEmailPage = lazy(() => import('@pages/confirm-email-page'));
const HomePage = lazy(() => import('@pages/home-page'));
const RegisterPage = lazy(() => import('@pages/register-page'));
const ResultPage = lazy(() => import('@pages/result-page'));

export function AppRouter() {
    return (
        <Routes>
            <Route
                path={PathConfig.BASE}
                element={
                    <WithErrorBoundary>
                        <AuthGuard>
                            <WithLoader>
                                <BaseLayout />
                            </WithLoader>
                        </AuthGuard>
                    </WithErrorBoundary>
                }
            >
                <Route path={PathConfig.BASE} element={<Navigate to={PathConfig.HOME} />} />
                <Route path={PathConfig.HOME} element={<HomePage />} />
            </Route>
            <Route
                element={
                    <WithErrorBoundary>
                        <GuestGuard>
                            <WithLoader>
                                <AuthLayout />
                            </WithLoader>
                        </GuestGuard>
                    </WithErrorBoundary>
                }
            >
                <Route path={PathConfig.AUTH} element={<AuthentificationPage />} />
                <Route path={PathConfig.REGISTRATION} element={<RegisterPage />} />
                <Route path={PathConfig.AUTH_CONFIRM_EMAIL} element={<ConfirmEmailPage />} />
                <Route
                    path={PathConfig.RESULT_ERROR}
                    element={<ResultPage type={TypePage.ERROR} />}
                />
                <Route
                    path={PathConfig.RESULT_ERROR_CHANGE_PASSWOED}
                    element={<ResultPage type={TypePage.ERROR_CHANGE_PASSWORD} />}
                />
                <Route
                    path={PathConfig.RESULT_ERROR_CHECK_EMAIL}
                    element={<ResultPage type={TypePage.ERROR_CHECK_EMAIL} />}
                />
                <Route
                    path={PathConfig.RESULT_ERROR_CHECK_EMAIL_NO_EXIST}
                    element={<ResultPage type={TypePage.ERROR_CHECK_EMAIL_NO_EXIST} />}
                />
                <Route
                    path={PathConfig.RESULT_ERROR_LOGIN}
                    element={<ResultPage type={TypePage.ERROR_LOGIN} />}
                />
                <Route
                    path={PathConfig.RESULT_ERROR_USER_EXIST}
                    element={<ResultPage type={TypePage.ERROR_USER_EXIST} />}
                />
                <Route
                    path={PathConfig.RESULT_SUCCESS}
                    element={<ResultPage type={TypePage.SUCCESS} />}
                />
                <Route
                    path={PathConfig.RESULT_SUCCESS_CHANGE_PASSWORD}
                    element={<ResultPage type={TypePage.SUCCESS_CHANGE_PASSWORD} />}
                />
            </Route>
        </Routes>
    );
}
