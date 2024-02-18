import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { sessionApi } from '../api/session-api';
import { SessionLoginType } from './types';

import { RegisterParams } from '@features/register';

import { RootState } from '@shared/types/store';
import { Email, Password } from '@shared/types/app';

type SessionSliceStateType = {
    accessToken?: string;
    isAuthorized: boolean;
    isLoading: boolean;
    sessionRepeatRegister?: RegisterParams;
};

const initialState: SessionSliceStateType = {
    accessToken: undefined,
    isAuthorized: false,
    isLoading: false,
    sessionRepeatRegister: {
        email: '',
        password: '',
    },
};

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        clearSessionData: (state) => {
            state.accessToken = undefined;
            state.isAuthorized = false;
        },
        setIsLoading: (state: SessionSliceStateType, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        setSessionRegister: (
            state: SessionSliceStateType,
            { payload }: PayloadAction<{ email: Email; password: Password }>,
        ) => {
            if (state.sessionRepeatRegister) {
                state.sessionRepeatRegister.email = payload.email;
                state.sessionRepeatRegister.password = payload.password;
            }
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

export const selectIsAuthorized = (state: RootState) => state.session.isAuthorized;
export const selectAccessToken = (state: RootState) => state.session.accessToken;
export const selectIsLoadingn = (state: RootState) => state.session.isLoading;
export const selectSessionRepeatRegister = (state: RootState) =>
    state.session.sessionRepeatRegister;

export const { actions: sessionActions } = sessionSlice;
