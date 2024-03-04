import { FeedbackType } from '@entities/feedbacks';

type SortFeedbackDateParams = {
    feedbacks: FeedbackType[];
};

export const sortFeedbackDate = ({ feedbacks }: SortFeedbackDateParams) => {
    const sortFeedbacks = [...feedbacks].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    return sortFeedbacks;
};
