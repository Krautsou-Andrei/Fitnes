import { ApiEndpoints } from '../config/api-endpoints';

import { mapGetTariffList, mapGetUser } from '../lib';

import type { RequestUserUpdateBody, TariffDto, UserDto } from './types';
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
        getTariff: build.mutation<Tariff[], void>({
            query: () => ({
                url: ApiEndpoints.GET_TARIFF,
                method: 'GET',
            }),
            transformResponse: (response: TariffDto[]) => response.map(mapGetTariffList),
        }),
    }),
});

export const { useGetUserQuery, useLazyGetUserQuery, useUpdateUserMutation } = profileApi;
