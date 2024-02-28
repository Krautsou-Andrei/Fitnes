import { createApi } from '@reduxjs/toolkit/query/react';
import { FEEDBACK_TAG, SESSION_TAG } from './tags';
import { baseQuery } from './base-query';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: [FEEDBACK_TAG, SESSION_TAG],
    endpoints: () => ({}),
});

export {};
