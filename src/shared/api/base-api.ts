import { createApi } from '@reduxjs/toolkit/query/react';
import { SESSION_TAG } from './tags';
import { baseQuery } from './base-query';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: [SESSION_TAG],
    endpoints: () => ({}),
});

export {};
