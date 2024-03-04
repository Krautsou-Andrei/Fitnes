import { useEffect, useState } from 'react';

import { getFeedbacksThunk } from '@features/feedbacks/model/getFeedbacks';

import { FeedbackType, feedbackActions, selectFeedbacks } from '@entities/feedbacks';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { showErrorForDevelop, sortFeedbackDate } from '@shared/lib';

export function useFeedbackPage() {
    const data = useAppSelector(selectFeedbacks);
    const [isFetch, setIsFetch] = useState(false);
    const dispatch = useAppDispatch();

    const [isAllFeedbacks, setIsAllFeedbacks] = useState(false);

    useEffect(() => {
        let ignore = false;

        dispatch(getFeedbacksThunk())
            .unwrap()
            .then((result: FeedbackType[]) => {
                if (!ignore) {
                    dispatch(feedbackActions.setFeedbacks(result));
                    setIsFetch(true);
                }
            })
            .catch((error: unknown) => {
                showErrorForDevelop('Get feedbacks', error);
            });

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    const sortData = sortFeedbackDate({ feedbacks: data });

    const isFeedbacks = sortData && sortData.length !== 0;
    const feedbacks = isAllFeedbacks ? sortData : sortData.slice(0, 4);

    const viewAllFeedback = () => {
        setIsAllFeedbacks((prevState) => !prevState);
    };

    return { isAllFeedbacks, isFetch, isFeedbacks, feedbacks, viewAllFeedback };
}
