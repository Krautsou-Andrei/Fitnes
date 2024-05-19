import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { type RequestConfirmEmailBody, sessionActions, sessionApi } from '@entities/session';

import { isFetchBaseQueryError } from '@shared/api';
import {BASENAME, EventApiConfig, HistoryStateConfig, PathConfig } from '@shared/config';

import type { RootState } from '@shared/types/store';

export const confirmEmailThunk = createAsyncThunk<
    void,
    RequestConfirmEmailBody,
    { state: RootState }
>(
    EventApiConfig.CONFIRM_EMAIL,

    async (body: RequestConfirmEmailBody, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));
        try {
            await dispatch(sessionApi.endpoints.confirmEmail.initiate(body)).unwrap();

            dispatch(
                push(`${BASENAME}${PathConfig.AUTH_CHANGE_PASSWORD}`, {
                    forgot: HistoryStateConfig.CONFIRM_PAGE_STEP_TWO,
                }),
            );
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                dispatch(sessionActions.setIsError(true));
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
