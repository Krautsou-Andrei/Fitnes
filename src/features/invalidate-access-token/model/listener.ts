import { createListenerMiddleware, type TypedStartListening } from '@reduxjs/toolkit';

import { logoutThunk } from '@features/logout/@ex/invallidate-access-token';

import { invalidateAccessToken } from '@shared/api/events/invalidate-token-event';
import type { AppDispatch, RootState } from '@shared/types/store';

export const invalidateAccessTokenListener = createListenerMiddleware();

export type TypedListening = TypedStartListening<RootState, AppDispatch>;

export const startInvalidateAccessTokenListener =
    invalidateAccessTokenListener.startListening as TypedListening;

startInvalidateAccessTokenListener({
    actionCreator: invalidateAccessToken,
    effect: async (_, api) => {
        api.dispatch(logoutThunk());
    },
});
