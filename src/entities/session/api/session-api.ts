import type {
    SessionChangePasswordType,
    SessionCheckEmaiType,
    SessionConfirmEmailType,
    SessionLoginType,
    SessionRegisterType,
} from '../model/types';
import { mapSessionLogin } from '../lib/map-session-login';
import {
    type SessionLoginDto,
    type RequestRegisterBody,
    RequestLoginBody,
    SessionCheckEmailDto,
    SessionConfirmEmailDto,
    SessionChangePasswordDto,
} from './types';

import { baseApi } from '@shared/api';
import { SESSION_TAG } from '@shared/api/tags';
import { mapSessionCheckEmail } from '../lib/map-session-check-email';
import { mapSessionConfirmEmail } from '../lib/map-session-confirm-email';
import { mapSessionChangePassword } from '../lib/map-session-change-password';

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
        checkEmail: build.mutation<SessionCheckEmaiType, RequestLoginBody>({
            query: (body) => ({
                url: '/auth/check-email',
                method: 'POST',
                body,
            }),
            invalidatesTags: [SESSION_TAG],
            transformResponse: (response: SessionCheckEmailDto) => mapSessionCheckEmail(response),
        }),
        confirmEmail: build.mutation<SessionConfirmEmailType, RequestLoginBody>({
            query: (body) => ({
                url: '/auth/confirm-email',
                method: 'POST',
                body,
            }),
            invalidatesTags: [SESSION_TAG],
            transformResponse: (response: SessionConfirmEmailDto) =>
                mapSessionConfirmEmail(response),
        }),
        changePassword: build.mutation<SessionChangePasswordType, RequestLoginBody>({
            query: (body) => ({
                url: '/auth/change-password',
                method: 'POST',
                body,
            }),
            invalidatesTags: [SESSION_TAG],
            transformResponse: (response: SessionChangePasswordDto) =>
                mapSessionChangePassword(response),
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