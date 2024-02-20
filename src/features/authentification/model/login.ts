import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { LoginParams } from './types';

import { sessionActions, sessionApi } from '@entities/session';

import { isFetchBaseQueryError } from '@shared/api';
import { RootState } from '@shared/types/store';
import { EventApiConfig, LocalStorageConfig, PathConfig } from '@shared/config';

export const loginThunk = createAsyncThunk<void, LoginParams, { state: RootState }>(
    EventApiConfig.LOGIN,

    async ({ email, password, isRemember }: LoginParams, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            await dispatch(sessionApi.endpoints.login.initiate({ email, password }))
                .unwrap()
                .then((response) => {
                    if (isRemember) {
                        localStorage.setItem(LocalStorageConfig.ACCESS_TOKEN, response.accessToken);
                    }

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
