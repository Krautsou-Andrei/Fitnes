import {
    trainingApi,
    useAddTrainingMutation,
    useGetTrainingQuery,
    useLazyGetTrainingQuery,
    useGetTrainingListQuery,
    useLazyGetTrainingListQuery,
    useEditTrainingMutation,
} from './api/training-api';

import {
    selectCreateTraining,
    selectIsEdit,
    selectTraining,
    selectTrainingName,
    trainingActions,
    trainingSlice,
} from './model/slice';

export type * from './model/types';
export type * from './api/types';

export {
    selectCreateTraining,
    selectIsEdit,
    selectTraining,
    selectTrainingName,
    trainingActions,
    trainingApi,
    trainingSlice,
    useAddTrainingMutation,
    useEditTrainingMutation,
    useGetTrainingQuery,
    useGetTrainingListQuery,
    useLazyGetTrainingQuery,
    useLazyGetTrainingListQuery,
};
