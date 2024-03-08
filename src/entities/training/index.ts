import {
    trainingApi,
    useAddTrainingMutation,
    useGetTrainingQuery,
    useLazyGetTrainingQuery,
    useGetTrainingListQuery,
    useLazyGetTrainingListQuery,
} from './api/training-api';

import {
    selectCreateTraining,
    selectTraining,
    selectTrainingName,
    trainingActions,
    trainingSlice,
} from './model/slice';

export type * from './model/types';
export type * from './api/types';

export {
    selectCreateTraining,
    selectTraining,
    selectTrainingName,
    trainingActions,
    trainingApi,
    trainingSlice,
    useAddTrainingMutation,
    useGetTrainingQuery,
    useLazyGetTrainingQuery,
    useGetTrainingListQuery,
    useLazyGetTrainingListQuery,
};
