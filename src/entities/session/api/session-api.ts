
import { mapSessionLogin } from '../lib/map-session-login';
import type {
    SessionChangePasswordType,
    SessionCheckEmaiType,
    SessionConfirmEmailType,
    SessionLoginType,
    SessionRegisterType,
} from '../model/types';

import type {
    SessionLoginDto,
    RequestRegisterBody,
    RequestLoginBody,   
    RequestCheckEmailBody,
    RequestConfirmEmailBody,
    RequestChangePasswordBody,
} from './types';

import { baseApi } from '@shared/api';
import { SESSION_TAG } from '@shared/api/tags';

export const sessionApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<SessionLoginType, RequestLoginBody>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
            invalidatesTags: [SESSION_TAG],
            transformResponse: (response: SessionLoginDto) => mapSessionLogin(response),
        }),
        register: build.mutation<SessionRegisterType, RequestRegisterBody>({
            query: (body) => ({
                url: '/auth/registration',
                method: 'POST',
                body,
            }),
            invalidatesTags: [SESSION_TAG],
        }),
        checkEmail: build.mutation<SessionCheckEmaiType, RequestCheckEmailBody>({
            query: (body) => ({
                url: '/auth/check-email',
                method: 'POST',
                body,
                credentials: 'include',
            }),
            invalidatesTags: [SESSION_TAG],           
        }),
        confirmEmail: build.mutation<SessionConfirmEmailType, RequestConfirmEmailBody>({
            query: (body) => ({
                url: '/auth/confirm-email',
                method: 'POST',
                body,
                credentials: 'include',
            }),
            invalidatesTags: [SESSION_TAG],            
        }),
        changePassword: build.mutation<SessionChangePasswordType, RequestChangePasswordBody>({
            query: (body) => ({
                url: '/auth/change-password',
                method: 'POST',
                body,
                credentials: 'include',
            }),
            invalidatesTags: [SESSION_TAG],           
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useChangePasswordMutation,
    useCheckEmailMutation,
    useConfirmEmailMutation,
} = sessionApi;
