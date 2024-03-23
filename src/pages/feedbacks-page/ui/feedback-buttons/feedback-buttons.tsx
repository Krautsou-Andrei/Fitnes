import { Button } from 'antd';
import clsn from 'classnames';

import { FeedbackConfig } from '@pages/feedbacks-page/config/feedback-config';

import { NewFeedbackButton } from '@features/feedbacks';

import { useOpenNewFeedbackModal } from '@shared/hooks';
import { DataTestIdConfig } from '@shared/config';

import styles from './feedback-buttons.module.less';

type FeedbackButtonsProps = {
    isAllFeedbacks: boolean;
    viewAllFeedback?: () => void;
    className?: string;
};

export function FeedbackButtons({
    isAllFeedbacks,
    viewAllFeedback,
    className,
}: FeedbackButtonsProps) {
    const { onClick } = useOpenNewFeedbackModal();

    return (
        <div className={clsn(styles['feedback-buttons'], className)}>
            <NewFeedbackButton onClick={onClick} />
            <Button
                type='link'
                className={styles['button-view-all']}
                onClick={viewAllFeedback}
                data-test-id={DataTestIdConfig.ALL_REVIEWS_BUTTON}
            >
                {isAllFeedbacks
                    ? FeedbackConfig.SEE_ALL_FEEDBACKS_NO
                    : FeedbackConfig.SEE_ALL_FEEDBACKS}
            </Button>
        </div>
    );
}
