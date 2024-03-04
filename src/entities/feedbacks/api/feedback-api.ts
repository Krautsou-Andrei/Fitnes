import { ApiEndpoints } from '../config/api-endpoints';
import { mapFeedback } from '../lib/map-feedback';
import type { FeedbackDto, RequesFeedbackBody } from './types';
import type { FeedbackType } from '../model/types';

import { baseApi } from '@shared/api';
import { FEEDBACK_TAG } from '@shared/api/tags';

export const feedbackApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getFeedback: build.query<FeedbackType[], void>({
            query: () => ({
                url: ApiEndpoints.FEEDBACK,
                method: 'GET',
            }),
            providesTags: [FEEDBACK_TAG],
            transformResponse: (response: FeedbackDto[]) => response.map(mapFeedback),
        }),
        addFeedback: build.mutation<FeedbackType[], RequesFeedbackBody>({
            query: (body) => ({
                url: ApiEndpoints.FEEDBACK,
                method: 'POST',
                body,
            }),
            invalidatesTags: [FEEDBACK_TAG],
        }),
    }),
});

export const { useGetFeedbackQuery, useLazyGetFeedbackQuery, useAddFeedbackMutation } = feedbackApi;
