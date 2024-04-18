import {
    trainingApi,
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
} from './api/training-api';

import {
    selectCreateTraining,
    selectIsEdit,
    selectIsGetRequest,
    selectPals,
    selectPal,
    selectTraining,
    selectTrainingName,
    selectUsersJoint,
    trainingActions,
    trainingSlice,
} from './model/slice';

export type * from './model/types';
export type * from './api/types';

export {
    selectCreateTraining,
    selectIsEdit,
    selectIsGetRequest,
    selectPals,
    selectPal,
    selectTraining,
    selectTrainingName,
    selectUsersJoint,
    trainingActions,
    trainingApi,
    trainingSlice,
    useAddTrainingMutation,
    useEditTrainingMutation,
    useGetTrainingQuery,
    useGetTrainingListQuery,
    useGetTrainingPalsQuery,
    useGetUserJointTrainingListQuery,
    useLazyGetTrainingQuery,
    useLazyGetTrainingListQuery,
    useLazyGetTrainingPalsQuery,
    useLazyGetUserJointTrainingListQuery,
};
