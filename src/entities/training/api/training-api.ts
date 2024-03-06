import { ApiEndpoints } from '../config/api-endpoints';

import { mapTraining } from '../lib/map-training';
import type { TrainingDto } from './types';
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
    }),
});

export const { useGetTrainingQuery, useLazyGetTrainingQuery } = trainingApi;
