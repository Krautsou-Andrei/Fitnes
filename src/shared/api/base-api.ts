import { createApi } from '@reduxjs/toolkit/query/react';
import { FEEDBACK_TAG, SESSION_TAG, TRAINING_TAG, USER_TAG } from './tags';
import { baseQueryWithNoToken } from './base-query-with-no-token';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithNoToken,
    tagTypes: [FEEDBACK_TAG, SESSION_TAG, TRAINING_TAG, USER_TAG],
    endpoints: () => ({}),
});

export {};
