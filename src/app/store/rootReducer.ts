import { combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

import { sessionSlice } from '@entities/session';
import { feedbackSlice } from '@entities/feedbacks';
import { baseApi } from '@shared/api';

const { routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
});

export const rootReducer = combineReducers({
    router: routerReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [feedbackSlice.name]: feedbackSlice.reducer,
    [sessionSlice.name]: sessionSlice.reducer,
});
