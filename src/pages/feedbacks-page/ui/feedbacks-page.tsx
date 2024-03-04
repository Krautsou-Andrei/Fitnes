import { Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import { FeedBackCard } from './feedback-card';
import { NoFeddback } from './no-feedback';
import { FeedbackButtons } from './feedback-buttons';
import { useFeedbackPage } from '../hooks';

import { NewFeedbackModal } from '@features/feedbacks';

import { Gap } from '@shared/config/constants';

import styles from './feedback-page.module.less';

export function FeedbacksPage() {
    const { isAllFeedbacks, isFeedbacks, isFetch, feedbacks, viewAllFeedback, styleCollapsed } =
        useFeedbackPage();

    return (
        <Content className={styles['feedback-page']}>
            {isFeedbacks && (
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
                        style={styleCollapsed}
                    />
                </>
            )}
            {isFetch && !isFeedbacks && <NoFeddback className={styles['no-feedback']} />}
            <NewFeedbackModal />
        </Content>
    );
}
