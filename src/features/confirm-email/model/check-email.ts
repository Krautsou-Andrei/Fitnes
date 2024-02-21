import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { sessionActions, sessionApi } from '@entities/session';

import { isFetchBaseQueryError } from '@shared/api';
import { EventApiConfig, HistoryStateConfig, PathConfig } from '@shared/config';

import type { CheckEmailParams } from './types';
import type { RootState } from '@shared/types/store';

export const checkEmailThunk = createAsyncThunk<void, CheckEmailParams, { state: RootState }>(
    EventApiConfig.CHECK_EMAIL,

    async (body: CheckEmailParams, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));
        try {
            await dispatch(sessionApi.endpoints.checkEmail.initiate(body))
                .unwrap()
                .then(() => {
                    dispatch(
                        push(PathConfig.AUTH_CONFIRM_EMAIL, {
                            forgot: HistoryStateConfig.CONFIRM_PAGE_STEP_ONE,
                        }),
                    );
                });
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                dispatch(push(PathConfig.RESULT_ERROR_CHECK_EMAIL_NO_EXIST));
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
