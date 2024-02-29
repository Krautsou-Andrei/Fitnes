import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { sessionActions, sessionApi } from '@entities/session';

import { RootState } from '@shared/types/store';
import { wait } from '@shared/lib';
import { FEEDBACK_TAG, SESSION_TAG } from '@shared/api';
import { EventApiConfig, LocalStorageConfig, PathConfig } from '@shared/config';
import { feedbackApi } from '@entities/feedbacks';

export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
    EventApiConfig.LOGOUT,

    async (_: unknown, { dispatch }) => {
        dispatch(sessionActions.clearSessionData());
        localStorage.removeItem(LocalStorageConfig.ACCESS_TOKEN);

        // Чтобы сделать теги недействительными в следующем тике цикла событий.
        // Иначе isAuthorized все равно будет равен true
        await wait(10);

        dispatch(sessionApi.util.invalidateTags([SESSION_TAG]));
        dispatch(feedbackApi.util.invalidateTags([FEEDBACK_TAG]));
        dispatch(push(PathConfig.AUTH));
    },
);
