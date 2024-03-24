import { ApiEndpoints } from '../config/api-endpoints';

import { mapGetTariffList, mapGetUser } from '../lib';

import type { RequestBuyTariffBody, RequestUserUpdateBody, TariffDto, UserDto } from './types';
import type { Tariff, User } from '../model/types';

import { baseApi, USER_TAG } from '@shared/api';

export const profileApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query<User, void>({
            query: () => ({
                url: ApiEndpoints.GET_USER,
                method: 'GET',
            }),
            providesTags: [USER_TAG],
            transformResponse: (response: UserDto) => mapGetUser(response),
        }),
        updateUser: build.mutation<User, Partial<RequestUserUpdateBody>>({
            query: (body) => ({
                url: ApiEndpoints.UPDATE_USER,
                method: 'PUT',
                body,
            }),
            invalidatesTags: [USER_TAG],
            transformResponse: (response: UserDto) => mapGetUser(response),
        }),
        getTariffList: build.mutation<Tariff[], void>({
            query: () => ({
                url: ApiEndpoints.GET_TARIFF_LIST,
                method: 'GET',
            }),
            transformResponse: (response: TariffDto[]) => response.map(mapGetTariffList),
        }),
        buyTariff: build.mutation<void, RequestBuyTariffBody>({
            query: () => ({
                url: ApiEndpoints.BUY_TARIFF,
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useBuyTariffMutation,
    useGetUserQuery,
    useLazyGetUserQuery,
    useUpdateUserMutation,
    useGetTariffListMutation,
} = profileApi;
