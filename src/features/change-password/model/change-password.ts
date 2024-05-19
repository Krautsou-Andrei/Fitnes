import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { resultErrorFetch } from '../lib/result-error-fetch';
import { RequestChangePasswordBody, sessionActions, sessionApi } from '@entities/session';

import { isFetchBaseQueryError } from '@shared/api';
import {
    BASENAME,
    EventApiConfig,
    HistoryStateConfig,
    PathConfig,
    SessionStorageConfig,
} from '@shared/config';
import { cryptPassword, removeSessionStorage, setSessionStorage } from '@shared/lib';
import type { RootState } from '@shared/types/store';

export const changePasswordThunk = createAsyncThunk<
    void,
    RequestChangePasswordBody,
    { state: RootState }
>(
    EventApiConfig.CHANGE_PASSWORD,

    async (body: RequestChangePasswordBody, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));
        try {
            await dispatch(sessionApi.endpoints.changePassword.initiate(body)).unwrap();

            removeSessionStorage(SessionStorageConfig.PASSWORD);
            removeSessionStorage(SessionStorageConfig.CONFIRM_PASSWORD);

            dispatch(
                push(`${BASENAME}${PathConfig.RESULT_SUCCESS_CHANGE_PASSWORD}`, {
                    result: HistoryStateConfig.RESULT,
                }),
            );
        } catch (error: unknown | undefined) {
            setSessionStorage(SessionStorageConfig.PASSWORD, cryptPassword(body.password));
            setSessionStorage(
                SessionStorageConfig.CONFIRM_PASSWORD,
                cryptPassword(body.confirmPassword),
            );

            if (isFetchBaseQueryError(error)) {
                dispatch(resultErrorFetch());
                return;
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
