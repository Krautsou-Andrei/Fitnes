import { combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

import { siderSlice } from '@widgets/app-sider';

import { resultModalSlice } from '@features/result-modal';

import { feedbackSlice } from '@entities/feedbacks';
import { invitiesSlice } from '@entities/invite';
import { profileSlice } from '@entities/profile';
import { sessionSlice } from '@entities/session';
import { trainingSlice } from '@entities/training';

import { baseApi } from '@shared/api';

const { routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
});

export const rootReducer = combineReducers({
    router: routerReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [feedbackSlice.name]: feedbackSlice.reducer,
    [invitiesSlice.name]: invitiesSlice.reducer,
    [profileSlice.name]: profileSlice.reducer,
    [resultModalSlice.name]: resultModalSlice.reducer,
    [sessionSlice.name]: sessionSlice.reducer,
    [siderSlice.name]: siderSlice.reducer,
    [trainingSlice.name]: trainingSlice.reducer,
});
