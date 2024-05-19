import { push } from 'redux-first-history';

import { ResultPageConfig } from '../config/result-page-config';

import { changePasswordThunk } from '@features/change-password/@ex/result';
import { checkEmailThunk } from '@features/confirm-email/@ex/result';
import { registerThunk } from '@features/register/@ex/result';

import { useAppDispatch } from '@shared/hooks';
import { BASENAME, HistoryStateConfig, PathConfig, SessionStorageConfig } from '@shared/config';
import { decryptPassword, getSessionStorage, showErrorForDevelop } from '@shared/lib';

export function useResultButtonClick(type: ResultPageConfig) {
    const dispatch = useAppDispatch();

    switch (type) {
        case ResultPageConfig.ERROR:
            return async () => {
                const email = getSessionStorage(SessionStorageConfig.EMAIL);
                const hashPassword = getSessionStorage(SessionStorageConfig.PASSWORD);

                dispatch(push(`${BASENAME}${PathConfig.REGISTRATION}`));

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
        case ResultPageConfig.ERROR_USER_EXIST:
            return () => {
                dispatch(push(`${BASENAME}${PathConfig.REGISTRATION}`));
            };
        case ResultPageConfig.ERROR_CHANGE_PASSWORD:
            return async () => {
                const hashPassword = getSessionStorage(SessionStorageConfig.PASSWORD);
                const hashPasswordConfirmf = getSessionStorage(
                    SessionStorageConfig.CONFIRM_PASSWORD,
                );
                dispatch(
                    push(`${BASENAME}${PathConfig.AUTH_CHANGE_PASSWORD}`, {
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
        case ResultPageConfig.ERROR_CHECK_EMAIL:
            return async () => {
                const email = getSessionStorage(SessionStorageConfig.EMAIL);

                dispatch(push(`${BASENAME}${PathConfig.AUTH}`));

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
        case ResultPageConfig.ERROR_CHECK_EMAIL_NO_EXIST:
        case ResultPageConfig.ERROR_LOGIN:
        case ResultPageConfig.SUCCESS:
        case ResultPageConfig.SUCCESS_CHANGE_PASSWORD:
            return () => {
                dispatch(push(`${BASENAME}${PathConfig.AUTH}`));
            };
    }
}
