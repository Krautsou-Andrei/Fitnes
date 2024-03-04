import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { resultErrorFetch } from '../lib/result-error-fetch';
import type { LoginParams } from './types';

import { sessionActions, sessionApi } from '@entities/session';

import { isFetchBaseQueryError } from '@shared/api';
import { RootState } from '@shared/types/store';
import { EventApiConfig, LocalStorageConfig, PathConfig } from '@shared/config';
import { setLocalStorage } from '@shared/lib';

export const loginThunk = createAsyncThunk<void, LoginParams, { state: RootState }>(
    EventApiConfig.LOGIN,

    async ({ email, password, isRemember }: LoginParams, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            const result = await dispatch(
                sessionApi.endpoints.login.initiate({ email, password }),
            ).unwrap();

            if (isRemember) {
                setLocalStorage(LocalStorageConfig.ACCESS_TOKEN, result.accessToken);
            }

            dispatch(push(PathConfig.HOME));
        } catch (error: unknown | undefined) {
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
