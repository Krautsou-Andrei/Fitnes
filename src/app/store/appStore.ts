import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

import { rootReducer } from './rootReducer';

import { invalidateAccessTokenListener } from '@features/invalidate-access-token';

import { baseApi } from '@shared/api';

const { createReduxHistory, routerMiddleware } = createReduxHistoryContext({
    history: createBrowserHistory(),
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                baseApi.middleware,
                routerMiddleware,
                invalidateAccessTokenListener.middleware,
            ),
    });
}

export const store = setupStore();

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
