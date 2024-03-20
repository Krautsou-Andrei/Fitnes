import { ApiEndpoints } from '../config/api-endpoints';

import { mapGetUser } from '../lib/map-get-user';

import type { RequestUserUpdateBody, UserDto } from './types';
import type { User } from '../model/types';

import { baseApi } from '@shared/api';

export const profileApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query<User, void>({
            query: () => ({
                url: ApiEndpoints.GET_USER,
                method: 'GET',
            }),
            transformResponse: (response: UserDto) => mapGetUser(response),
        }),
        updateUser: build.mutation<User, Partial<RequestUserUpdateBody>>({
            query: (body) => ({
                url: ApiEndpoints.UPDATE_USER,
                method: 'PUT',
                body,
            }),
            transformResponse: (response: UserDto) => mapGetUser(response),
        }),
    }),
});

export const { useGetUserQuery, useLazyGetUserQuery, useUpdateUserMutation } = profileApi;
