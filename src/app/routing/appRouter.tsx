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
                path={PathConfig.RESULT}
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
                <Route index={true} path=':resultType' element={<ResultPage />} />
            </Route>
        </Routes>
    );
}
