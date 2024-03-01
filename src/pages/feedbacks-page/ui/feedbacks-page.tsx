import { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import { FeedBackCard } from './feedback-card';
import { NoFeddback } from './no-feedback';
import { FeedbackButtons } from './feedback-buttons';

import { getFeedbacksThunk } from '@features/feedbacks/model/getFeedbacks';

import { FeedbackType, feedbackActions, selectFeedbacks } from '@entities/feedbacks';

import { showErrorForDevelop, sortFeedbackDate } from '@shared/lib';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { Gap } from '@shared/config/constants';

import styles from './feedback-page.module.less';

export function FeedbacksPage() {
    const data = useAppSelector(selectFeedbacks);
    const dispatch = useAppDispatch();

    const [isAllFeedbacks, setIsAllFeedbacks] = useState(false);

    useEffect(() => {
        let ignore = false;

        dispatch(getFeedbacksThunk())
            .unwrap()
            .then((result: FeedbackType[]) => {
                if (!ignore) {
                    dispatch(feedbackActions.setFeedbacks(result));
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

    return (
        <Content className={styles['feedback-page']}>
            {isFeedbacks ? (
                <>
                    <Row gutter={[0, { xs: Gap.GAP_M, md: Gap.GAP_XL }]}>
                        {feedbacks.map((feedback) => (
                            <Col key={feedback.id} span={Gap.GAP_XL}>
                                <FeedBackCard
                                    fullName={feedback.fullName}
                                    imageSrc={feedback.imageSrc}
                                    message={feedback.message}
                                    rating={feedback.rating}
                                    createdAt={feedback.createdAt}
                                />
                            </Col>
                        ))}
                    </Row>
                    <FeedbackButtons
                        className={styles['feedback-buttons']}
                        isAllFeedbacks={isAllFeedbacks}
                        viewAllFeedback={viewAllFeedback}
                    />
                </>
            ) : (
                <NoFeddback className={styles['no-feedback']} />
            )}
        </Content>
    );
}
