import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { RegisterParams } from './types';

import { sessionActions, sessionApi } from '@entities/session';

import { isFetchBaseQueryError } from '@shared/api';
import { RootState } from '@shared/types/store';
import { EventApiConfig, PathConfig } from '@shared/config';

export const registerThunk = createAsyncThunk<void, RegisterParams, { state: RootState }>(
    EventApiConfig.REGISTER,

    async (body: RegisterParams, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));
        try {
            await dispatch(sessionApi.endpoints.register.initiate(body))
                .unwrap()
                .then(() => {
                    dispatch(push(PathConfig.RESULT_SUCCESS));
                });
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                if (error.status === 409) {
                    dispatch(push(PathConfig.RESULT_ERROR_USER_EXIST));
                    return;
                }

                dispatch(push(PathConfig.RESULT_ERROR));
                return;
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
