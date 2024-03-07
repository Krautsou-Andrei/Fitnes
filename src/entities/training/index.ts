import {
    trainingApi,
    useAddTrainingMutation,
    useGetTrainingQuery,
    useLazyGetTrainingQuery,
} from './api/training-api';

import { selectTraning, traningActions, traningSlice } from './model/slice';

export type * from './model/types';
export type * from './api/types';

export {
    selectTraning,
    traningActions,
    trainingApi,
    traningSlice,
    useAddTrainingMutation,
    useGetTrainingQuery,
    useLazyGetTrainingQuery,
};
