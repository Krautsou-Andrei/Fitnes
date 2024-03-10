import { ApiEndpoints } from '../config/api-endpoints';

import { mapTraining, mapTrainingList } from '../lib';
import type {
    TrainingDto,
    RequestTrainingBody,
    TrainingNameDto,
    RequestTrainingEditBody,
} from './types';
import type { TrainingName, Training } from '../model/types';

import { baseApi } from '@shared/api';
import { TRAINING_TAG } from '@shared/api/tags';

export const trainingApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getTraining: build.query<Training[], void>({
            query: () => ({
                url: ApiEndpoints.TRAINING,
                method: 'GET',
            }),
            providesTags: [TRAINING_TAG],
            transformResponse: (response: TrainingDto[]) => response.map(mapTraining),
        }),
        addTraining: build.mutation<Training, RequestTrainingBody>({
            query: (body) => ({
                url: ApiEndpoints.TRAINING,
                method: 'POST',
                body,
            }),
            invalidatesTags: [TRAINING_TAG],
            transformResponse: (response: TrainingDto) => mapTraining(response),
        }),
        editTraining: build.mutation<Training, RequestTrainingEditBody>({
            query: ({ trainingId, body }) => ({
                url: `${ApiEndpoints.TRAINING}/${trainingId}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: [TRAINING_TAG],
            transformResponse: (response: TrainingDto) => mapTraining(response),
        }),
        getTrainingList: build.query<TrainingName[], void>({
            query: () => ({
                url: ApiEndpoints.CATALOGS_TRAINING_LIST,
                method: 'GEt',
            }),
            transformResponse: (response: TrainingNameDto[]) => response.map(mapTrainingList),
        }),
    }),
});

export const {
    useGetTrainingQuery,
    useAddTrainingMutation,
    useLazyGetTrainingQuery,
    useGetTrainingListQuery,
    useLazyGetTrainingListQuery,
    useEditTrainingMutation,
} = trainingApi;
