import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { RequestChangePasswordBody, sessionActions, sessionApi } from '@entities/session';

import { isFetchBaseQueryError } from '@shared/api';
import { EventApiConfig, PathConfig } from '@shared/config';

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
            await dispatch(sessionApi.endpoints.changePassword.initiate(body))
                .unwrap()
                .then(() => {
                    dispatch(push(PathConfig.RESULT_SUCCESS_CHANGE_PASSWORD));
                });
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                dispatch(push(PathConfig.RESULT_ERROR_CHANGE_PASSWORD));
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
