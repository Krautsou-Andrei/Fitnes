import { Button } from 'antd';

import { FeedbackConfig } from '../../config/feedback-config';

import styles from './new-feedback-button.module.less';

type NewFeedbackButtonProps = {
    onClick: () => void;
};

export function NewFeedbackButton({ onClick }: NewFeedbackButtonProps) {
    return (
        <Button type='primary' className={styles['button-new-feedback']} onClick={onClick}>
            {FeedbackConfig.BUTTON_ADD_FEEDBACK}
        </Button>
    );
}
