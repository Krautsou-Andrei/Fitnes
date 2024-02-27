import { type BaseQueryFn } from 'node_modules/@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
    type FetchArgs,
    type FetchBaseQueryError,
    type FetchBaseQueryMeta,
} from 'node_modules/@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { config } from '../lib/config';
import { RootState } from '@shared/types/@ex/base-query';
import { LocalStorageConfig } from '@shared/config';
import { getLocalStorage } from '@shared/lib';

export const baseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    object,
    FetchBaseQueryMeta
> = fetchBaseQuery({
    baseUrl: config.API_ENDPOINT,
    prepareHeaders: (headers, { getState }) => {
        const { accessToken } = (getState() as RootState).session;
        const accessTockenLocalStorage = getLocalStorage(LocalStorageConfig.ACCESS_TOKEN);

        if (accessToken || accessTockenLocalStorage) {
            headers.set('Authorization', `Bearer ${accessToken}`);
        }

        return headers;
    },
});
