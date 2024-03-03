import { Button } from 'antd';

import { FeedbackConfig } from '../../config/feedback-config';
import { DataTestIdConfig } from '@shared/config';

import styles from './new-feedback-button.module.less';

type NewFeedbackButtonProps = {
    onClick: () => void;
};

export function NewFeedbackButton({ onClick }: NewFeedbackButtonProps) {
    return (
        <Button
            type='primary'
            className={styles['button-new-feedback']}
            onClick={onClick}
            data-test-id={DataTestIdConfig.WRITE_REVIEW}
        >
            {FeedbackConfig.BUTTON_ADD_FEEDBACK}
        </Button>
    );
}
