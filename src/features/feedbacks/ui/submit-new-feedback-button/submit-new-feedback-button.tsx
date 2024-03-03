import { Button } from 'antd';

import { FeedbackConfig } from '@features/feedbacks/config/feedback-config';
import { DataTestIdConfig } from '@shared/config';

import styles from './submit-new-feedback-button.module.less';

type SubmitNewFeedbackButtonProps = {
    isDisabled: boolean;
    onClick: () => void;
};

export function SubmitNewFeedbackButton({ isDisabled, onClick }: SubmitNewFeedbackButtonProps) {
    return (
        <Button
            type='primary'
            onClick={onClick}
            disabled={!isDisabled}
            className={styles['submit-button']}
            data-test-id={DataTestIdConfig.NEW_REVIEW_SUBMIT_BUTTON}
        >
            {FeedbackConfig.BUTTON_SUBMIT}
        </Button>
    );
}
