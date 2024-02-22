import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { sessionApi } from '../api/session-api';
import type { SessionLoginType } from './types';

import type { RootState } from '@shared/types/store';

type SessionSliceStateType = {
    accessToken?: string;
    isAuthorized: boolean;
    isError: boolean;
    isLoading: boolean;
};

const initialState: SessionSliceStateType = {
    accessToken: undefined,
    isAuthorized: false,
    isError: false,
    isLoading: false,
};

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        clearSessionData: (state) => {
            state.accessToken = undefined;
            state.isAuthorized = false;
        },
        setIsError: (state: SessionSliceStateType, { payload }: PayloadAction<boolean>) => {
            state.isError = payload;
        },
        setIsLoading: (state: SessionSliceStateType, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            sessionApi.endpoints.login.matchFulfilled,
            (state: SessionSliceStateType, { payload }: PayloadAction<SessionLoginType>) => {
                state.isAuthorized = true;

                if (state.isAuthorized) {
                    state.accessToken = payload.accessToken;
                }
            },
        );
    },
});

export const selectAccessToken = (state: RootState) => state.session.accessToken;
export const selectIsAuthorized = (state: RootState) => state.session.isAuthorized;
export const selectIsError = (state: RootState) => state.session.isError;
export const selectIsLoadingn = (state: RootState) => state.session.isLoading;

export const { actions: sessionActions } = sessionSlice;
