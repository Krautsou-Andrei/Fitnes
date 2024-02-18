import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { sessionApi } from '../api/session-api';
import { SessionLoginType } from '..';

import { RootState } from '@shared/types/store';

type SessionSliceStateType =
    | { accessToken: string; isAuthorized: true; isLoading: boolean }
    | {
          isAuthorized: false;
          accessToken?: string;
          isLoading: boolean;
      };

const initialState: SessionSliceStateType = {
    isAuthorized: false,
    isLoading: false,
    accessToken: undefined,
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

export const { actions: sessionActions } = sessionSlice;
