import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthLayout, BaseLayout } from '@app/layouts';

import HomePage from '@pages/home-page';
import AuthentificationPage from '@pages/authentification-page';
import RegisterPage from '@pages/register-page';
import ConfirmEmailPage from '@pages/confirm-email-page';
import ChangePasswordPage from '@pages/change-password-page';
import ResultPage from '@pages/result-page';

import { AuthGuard, GuestGuard, ResponseGuard } from '@features/guard-router';

import { WithErrorBoundary } from '@shared/providers';
import { PathConfig } from '@shared/config';
import { TypePage } from '@shared/types/app';

export function AppRouter() {
    return (
        <Routes>
            <Route
                path={PathConfig.BASE}
                element={
                    <WithErrorBoundary>
                        <AuthGuard>
                            <BaseLayout />
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
                            <AuthLayout />
                        </GuestGuard>
                    </WithErrorBoundary>
                }
            >
                <Route path={PathConfig.AUTH} element={<AuthentificationPage />} />
                <Route path={PathConfig.REGISTRATION} element={<RegisterPage />} />
                <Route
                    path={PathConfig.AUTH_CONFIRM_EMAIL}
                    element={
                        <ResponseGuard>
                            <ConfirmEmailPage />
                        </ResponseGuard>
                    }
                />
                <Route
                    path={PathConfig.AUTH_CHANGE_PASSWORD}
                    element={
                        <ResponseGuard>
                            <ChangePasswordPage />
                        </ResponseGuard>
                    }
                />
            </Route>
            <Route
                element={
                    <WithErrorBoundary>
                        <GuestGuard>
                            <ResponseGuard>
                                <AuthLayout />
                            </ResponseGuard>
                        </GuestGuard>
                    </WithErrorBoundary>
                }
            >
                <Route
                    path={PathConfig.RESULT_ERROR}
                    element={<ResultPage type={TypePage.ERROR} />}
                />
                <Route
                    path={PathConfig.RESULT_ERROR_CHANGE_PASSWORD}
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
