import { ApiEndpoints } from '../config/api-endpoints';
import { mapInvite } from '../lib/map-invite';
import type { Invite } from '../model/types';
import type {
    InviteDto,
    RequestInviteBody,
    RequestRejectSend,
    RequestSendAnswerBody,
} from './types';

import { baseApi } from '@shared/api';
import { PALS_TAG } from '@shared/api/tags';

export const inviteApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getInvities: build.query<Invite[], void>({
            query: () => ({
                url: ApiEndpoints.INVITE,
                method: 'GET',
            }),
            providesTags: [PALS_TAG],
            transformResponse: (response: InviteDto[]) => response.map(mapInvite),
        }),
        sendInvitie: build.mutation<Invite, RequestInviteBody>({
            query: (body) => ({
                url: ApiEndpoints.INVITE,
                method: 'POST',
                body,
            }),
            invalidatesTags: [PALS_TAG],
        }),
        sendAnswerInvitie: build.mutation<Invite, RequestSendAnswerBody>({
            query: (body) => ({
                url: ApiEndpoints.INVITE,
                method: 'PUT',
                body,
            }),
            invalidatesTags: [PALS_TAG],
        }),
        rejectInvitie: build.mutation<Invite, RequestRejectSend>({
            query: ({ id }) => ({
                url: `${ApiEndpoints.INVITE}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [PALS_TAG],
        }),
    }),
});

export const {
    useGetInvitiesQuery,
    useLazyGetInvitiesQuery,
    useSendAnswerInvitieMutation,
    useRejectInvitieMutation,
    useSendInvitieMutation,
} = inviteApi;
