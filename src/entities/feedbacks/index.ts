import {
    feedbackApi,
    useAddFeedbackMutation,
    useGetFeedbackQuery,
    useLazyGetFeedbackQuery,
} from './api/feedback-api';

import { feedbackActions, feedbackSlice, selectFeedbacks } from './model/slice';

export type * from './model/types';
export type * from './api/types';

export {
    feedbackActions,
    feedbackApi,
    feedbackSlice,
    useAddFeedbackMutation,
    useGetFeedbackQuery,
    useLazyGetFeedbackQuery,
    selectFeedbacks,
};
