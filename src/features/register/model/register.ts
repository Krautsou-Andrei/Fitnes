import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { resultErrorFetch } from '../lib/result-error-fetch';
import type { RegisterParams } from './types';

import { sessionActions, sessionApi } from '@entities/session';

import { cryptPassword } from '@shared/lib';
import { isFetchBaseQueryError } from '@shared/api';
import { RootState } from '@shared/types/store';
import {
    EventApiConfig,
    HistoryStateConfig,
    PathConfig,
    SessionStorageConfig,
} from '@shared/config';

export const registerThunk = createAsyncThunk<void, RegisterParams, { state: RootState }>(
    EventApiConfig.REGISTER,

    async (body: RegisterParams, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            await dispatch(sessionApi.endpoints.register.initiate(body))
                .unwrap()
                .then(() => {
                    sessionStorage.setItem(SessionStorageConfig.EMAIL, '');
                    sessionStorage.setItem(SessionStorageConfig.PASSWORD, '');
                    dispatch(
                        push(PathConfig.RESULT_SUCCESS, { result: HistoryStateConfig.RESULT }),
                    );
                });
        } catch (error: unknown | undefined) {
            sessionStorage.setItem(SessionStorageConfig.EMAIL, body.email);
            sessionStorage.setItem(SessionStorageConfig.PASSWORD, cryptPassword(body.password));

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
