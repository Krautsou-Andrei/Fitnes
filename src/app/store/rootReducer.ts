import { combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

import { baseApi } from '@shared/api';

const { routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
});

export const rootReducer = combineReducers({
    router: routerReducer,
    [baseApi.reducerPath]: baseApi.reducer,
});
