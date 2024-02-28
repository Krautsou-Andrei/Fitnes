import { push } from 'redux-first-history';

import { changePasswordThunk } from '@features/change-password/@ex/result';
import { checkEmailThunk } from '@features/confirm-email/@ex/result';
import { registerThunk } from '@features/register/@ex/result';

import { useAppDispatch } from '@shared/hooks';
import { HistoryStateConfig, PathConfig, SessionStorageConfig } from '@shared/config';
import { decryptPassword, getSessionStorage, showErrorForDevelop } from '@shared/lib';
import type { ResultPageType } from '@shared/types/app';

export function useResultButtonClick({ type }: ResultPageType) {
    const dispatch = useAppDispatch();

    switch (type) {
        case 'error':
            return async () => {
                const email = getSessionStorage(SessionStorageConfig.EMAIL);
                const hashPassword = getSessionStorage(SessionStorageConfig.PASSWORD);

                dispatch(push(PathConfig.REGISTRATION));

                if (email && email !== '' && hashPassword && hashPassword !== '') {
                    const password = decryptPassword(hashPassword);

                    try {
                        await dispatch(
                            registerThunk({ email: email, password: password }),
                        ).unwrap();
                    } catch {
                        (error: unknown) => {
                            showErrorForDevelop('Register', error);
                        };
                    }
                }
            };
        case 'errorUserExist':
            return () => {
                dispatch(push(PathConfig.REGISTRATION));
            };
        case 'errorChangePassword':
            return async () => {
                const hashPassword = getSessionStorage(SessionStorageConfig.PASSWORD);
                const hashPasswordConfirmf = getSessionStorage(
                    SessionStorageConfig.CONFIRM_PASSWORD,
                );
                dispatch(
                    push(PathConfig.AUTH_CHANGE_PASSWORD, {
                        forgot: HistoryStateConfig.CONFIRM_PAGE_STEP_TWO,
                    }),
                );
                if (
                    hashPasswordConfirmf &&
                    hashPasswordConfirmf !== '' &&
                    hashPassword &&
                    hashPassword !== ''
                ) {
                    const password = decryptPassword(hashPassword);
                    const passwordConfirm = decryptPassword(hashPasswordConfirmf);
                    try {
                        await dispatch(
                            changePasswordThunk({
                                password: password,
                                confirmPassword: passwordConfirm,
                            }),
                        ).unwrap();
                    } catch {
                        (error: unknown) => {
                            showErrorForDevelop('Confirm password', error);
                        };
                    }
                }
            };
        case 'errorCheckEmail':
            return async () => {
                const email = getSessionStorage(SessionStorageConfig.EMAIL);

                dispatch(push(PathConfig.AUTH));

                if (email && email !== '') {
                    try {
                        await dispatch(checkEmailThunk({ email: email })).unwrap();
                    } catch {
                        (error: unknown) => {
                            showErrorForDevelop('CheckEmail', error);
                        };
                    }
                }
            };
        case 'errorCheckEmailNoExist':
        case 'errorLogin':
        case 'success':
        case 'successChangePassword':
            return () => {
                dispatch(push(PathConfig.AUTH));
            };
    }
}
