import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { sessionActions, sessionApi } from '@entities/session';

import { RootState } from '@shared/types/store';
import { wait } from '@shared/lib';
import { SESSION_TAG } from '@shared/api';
import { LocalStorageConfig, PathConfig } from '@shared/config';


export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
    'authentication/logout',
    async (_: unknown, { dispatch }) => {
        dispatch(sessionActions.clearSessionData());
        localStorage.removeItem(LocalStorageConfig.ACCESS_TOKEN);

        // Чтобы сделать теги недействительными в следующем тике цикла событий.
        // Иначе isAuthorized все равно будет равен true
        await wait(10);

        dispatch(sessionApi.util.invalidateTags([SESSION_TAG]));
        dispatch(push(PathConfig.AUTH));
    },
);
