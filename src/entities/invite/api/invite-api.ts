import { ApiEndpoints } from '../config/api-endpoints';
import { mapInvite } from '../lib/map-invite';
import type { Invite } from '../model/types';
import type { InviteDto, RequestInviteBody } from './types';

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
    }),
});

export const { useGetInvitiesQuery, useLazyGetInvitiesQuery, useSendInvitieMutation } = inviteApi;
