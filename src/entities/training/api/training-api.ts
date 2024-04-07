import { ApiEndpoints } from '../config/api-endpoints';

import { mapPals, mapTraining, mapTrainingList } from '../lib';
import type {
    TrainingDto,
    RequestTrainingBody,
    TrainingNameDto,
    RequestTrainingEditBody,
    PalDto,
} from './types';
import type { TrainingName, Training, Pal, TrainingBestType } from '../model/types';

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
        }),
        getTrainingList: build.query<TrainingName[], void>({
            query: () => ({
                url: ApiEndpoints.CATALOGS_TRAINING_LIST,
                method: 'GEt',
            }),
            transformResponse: (response: TrainingNameDto[]) => response.map(mapTrainingList),
        }),
        getTrainingPals: build.query<Pal[], void>({
            query: () => ({
                url: ApiEndpoints.CATALOG_TRAINING_PALS,
                method: 'GEt',
            }),
            transformResponse: (response: PalDto[]) => response.map(mapPals),
        }),
        getUserJointTrainingList: build.query<Pal[], void>({
            query: () => ({
                url: ApiEndpoints.CATALOGS_USER_JOINT_TRAINING_LIST,
                method: 'GEt',
            }),
            transformResponse: (response: PalDto[]) => response.map(mapPals),
        }),
        getUserJointTrainingListBest: build.query<Pal[], TrainingBestType>({
            query: (params) => {
                return {
                    url: ApiEndpoints.CATALOGS_USER_JOINT_TRAINING_LIST,
                    method: 'GET',
                    params,
                };
            },
            transformResponse: (response: PalDto[]) => response.map(mapPals),
        }),
    }),
});

export const {
    useAddTrainingMutation,
    useEditTrainingMutation,
    useGetTrainingQuery,
    useGetTrainingListQuery,
    useGetTrainingPalsQuery,
    useGetUserJointTrainingListQuery,
    useLazyGetTrainingQuery,
    useLazyGetTrainingPalsQuery,
    useLazyGetTrainingListQuery,
    useLazyGetUserJointTrainingListQuery,
} = trainingApi;
