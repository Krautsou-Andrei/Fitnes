import { push } from 'redux-first-history';

import { changePasswordThunk } from '@features/change-password/@ex/result';
import { checkEmailThunk } from '@features/confirm-email/@ex/result';
import { registerThunk } from '@features/register/@ex/result';

import { useAppDispatch } from '@shared/hooks';
import { HistoryStateConfig, PathConfig, SessionStorageConfig } from '@shared/config';
import { ResultPageType } from '@shared/types/app';
import { decryptPassword } from '@shared/lib';

export function useResultButtonClick({ type }: ResultPageType) {
    const dispatch = useAppDispatch();

    switch (type) {
        case 'error':
            return () => {
                const email = sessionStorage.getItem(SessionStorageConfig.EMAIL);
                const hashPassword = sessionStorage.getItem(SessionStorageConfig.PASSWORD);
                dispatch(push(PathConfig.REGISTRATION));

                if (email && email !== '' && hashPassword && hashPassword !== '') {
                    const password = decryptPassword(hashPassword);
                    dispatch(registerThunk({ email: email, password: password }));
                }
            };
        case 'errorUserExist':
            return () => {
                dispatch(push(PathConfig.REGISTRATION));
            };
        case 'errorChangePassword':
            return () => {
                const hashPassword = sessionStorage.getItem(SessionStorageConfig.PASSWORD);
                const hashPasswordConfirmf = sessionStorage.getItem(
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
                    dispatch(
                        changePasswordThunk({
                            password: password,
                            confirmPassword: passwordConfirm,
                        }),
                    );
                }
            };
        case 'errorCheckEmail':
            return () => {
                const email = sessionStorage.getItem(SessionStorageConfig.EMAIL);

                dispatch(push(PathConfig.AUTH));

                if (email && email !== '') {
                    dispatch(checkEmailThunk({ email: email }));
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
