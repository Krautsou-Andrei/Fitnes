import { Button } from 'antd';
import clsn from 'classnames';

import { FeedbackConfig } from '@pages/feedbacks-page/config/feedback-config';
import { useOpenNewFeedbackModal } from '@pages/feedbacks-page/hooks';

import { NewFeedbackButton } from '@features/feedbacks';

import styles from './feedback-buttons.module.less';

type FeedbackButtonsProps = {
    className?: string;
    isAllFeedbacks: boolean;
    viewAllFeedback?: () => void;
};

export function FeedbackButtons({
    className,
    isAllFeedbacks,
    viewAllFeedback,
}: FeedbackButtonsProps) {
    const { onClick } = useOpenNewFeedbackModal();

    return (
        <div className={clsn(styles['feedback-buttons'], className)}>
            <NewFeedbackButton onClick={onClick} />
            <Button
                type='link'
                className={styles['button-view-all']}
                onClick={viewAllFeedback}
                data-test-id='all-reviews-button'
            >
                {isAllFeedbacks
                    ? FeedbackConfig.SEE_ALL_FEEDBACKS_NO
                    : FeedbackConfig.SEE_ALL_FEEDBACKS}
            </Button>
        </div>
    );
}
