import { ApiEndpoints } from '../config/api-endpoints';

import { mapTraining } from '../lib/map-training';
import type { TrainingDto, RequestTrainingBody } from './types';
import type { TrainingType } from '../model/types';

import { baseApi } from '@shared/api';
import { TRAINING_TAG } from '@shared/api/tags';

export const trainingApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getTraining: build.query<TrainingType[], void>({
            query: () => ({
                url: ApiEndpoints.TRAINING,
                method: 'GET',
            }),
            providesTags: [TRAINING_TAG],
            transformResponse: (response: TrainingDto[]) => response.map(mapTraining),
        }),
        addTraining: build.mutation<TrainingType, RequestTrainingBody>({
            query: (body) => ({
                url: ApiEndpoints.TRAINING,
                method: 'POST',
                body,
            }),
            invalidatesTags: [TRAINING_TAG],
            transformResponse: (response: TrainingDto) => mapTraining(response),
        }),
    }),
});

export const { useGetTrainingQuery, useAddTrainingMutation, useLazyGetTrainingQuery } = trainingApi;
