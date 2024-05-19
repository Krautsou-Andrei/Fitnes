import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { resultErrorFetch } from '../lib/result-error-fetch';
import type { RegisterParams } from './types';

import { sessionActions, sessionApi } from '@entities/session';

import { cryptPassword, removeSessionStorage, setSessionStorage } from '@shared/lib';
import { isFetchBaseQueryError } from '@shared/api';
import { RootState } from '@shared/types/store';
import {
    BASENAME,
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
            await dispatch(sessionApi.endpoints.register.initiate(body)).unwrap();

            removeSessionStorage(SessionStorageConfig.EMAIL);
            removeSessionStorage(SessionStorageConfig.PASSWORD);

            dispatch(push(`${BASENAME}${PathConfig.RESULT_SUCCESS}`, { result: HistoryStateConfig.RESULT }));
        } catch (error: unknown | undefined) {
            setSessionStorage(SessionStorageConfig.EMAIL, body.email);
            setSessionStorage(SessionStorageConfig.PASSWORD, cryptPassword(body.password));

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
