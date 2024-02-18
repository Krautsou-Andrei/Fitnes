import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { LoginParams } from './types';

import { sessionActions, sessionApi } from '@entities/session';

import { isFetchBaseQueryError } from '@shared/api';
import { RootState } from '@shared/types/store';
import { PathConfig } from '@shared/config';

export const loginThunk = createAsyncThunk<void, LoginParams, { state: RootState }>(
    'authentication/login',

    async (body: LoginParams, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));
        try {
            await dispatch(sessionApi.endpoints.login.initiate(body))
                .unwrap()
                .then((response) => {
                    localStorage.setItem('accessToken', response.accessToken);
                    dispatch(push(PathConfig.HOME));
                });
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                dispatch(push(PathConfig.RESULT_ERROR_LOGIN));
                return;
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
