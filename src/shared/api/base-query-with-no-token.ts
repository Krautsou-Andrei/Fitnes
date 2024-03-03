import { QueryReturnValue } from 'node_modules/@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
    BaseQueryApi,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

import { baseQuery } from './base-query';
import { StatusError } from './status-error';
import { invalidateAccessToken } from './events/invalidate-token-event';

import { getLocalStorage } from '@shared/lib';
import { LocalStorageConfig } from '@shared/config';

export async function baseQueryWithNoToken(
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: object,
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> {
    const result = await baseQuery(args, api, extraOptions);
    const token = getLocalStorage(LocalStorageConfig.ACCESS_TOKEN);

    // See example in @/features/authentication/InvalidateAccessToken

    if (typeof result.error?.status === 'number' && result.error !== undefined) {
        if (result.error.status === StatusError.ERROR_403) {
            if (token) {
                api.dispatch(invalidateAccessToken());
            }
        }
    }

    return result;
}
