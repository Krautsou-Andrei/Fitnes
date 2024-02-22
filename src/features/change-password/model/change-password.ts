import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { resultErrorFetch } from '../lib/result-error-fetch';
import { RequestChangePasswordBody, sessionActions, sessionApi } from '@entities/session';

import { isFetchBaseQueryError } from '@shared/api';
import {
    EventApiConfig,
    HistoryStateConfig,
    PathConfig,
    SessionStorageConfig,
} from '@shared/config';
import type { RootState } from '@shared/types/store';
import { cryptPassword } from '@shared/lib';

export const changePasswordThunk = createAsyncThunk<
    void,
    RequestChangePasswordBody,
    { state: RootState }
>(
    EventApiConfig.CHANGE_PASSWORD,

    async (body: RequestChangePasswordBody, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));
        try {
            await dispatch(sessionApi.endpoints.changePassword.initiate(body))
                .unwrap()
                .then(() => {
                    sessionStorage.setItem(SessionStorageConfig.PASSWORD, '');
                    sessionStorage.setItem(SessionStorageConfig.CONFIRM_PASSWORD, '');
                    dispatch(
                        push(PathConfig.RESULT_SUCCESS_CHANGE_PASSWORD, {
                            result: HistoryStateConfig.RESULT,
                        }),
                    );
                });
        } catch (error: unknown | undefined) {
            sessionStorage.setItem(SessionStorageConfig.PASSWORD, cryptPassword(body.password));
            sessionStorage.setItem(
                SessionStorageConfig.CONFIRM_PASSWORD,
                cryptPassword(body.confirmPassword),
            );
            if (isFetchBaseQueryError(error)) {
                dispatch(resultErrorFetch(error));
                return;
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
