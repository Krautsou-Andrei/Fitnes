import { Button } from 'antd';
import clsn from 'classnames';

import { FeedbackConfig } from '../../config/feedback-config';
import { DataTestIdConfig } from '@shared/config';

import styles from './new-feedback-button.module.less';

type NewFeedbackButtonProps = {
    className?: string;
    onClick: () => void;
};

export function NewFeedbackButton({ className, onClick }: NewFeedbackButtonProps) {
    return (
        <Button
            type='primary'
            className={clsn(styles['button-new-feedback'], className)}
            onClick={onClick}
            data-test-id={DataTestIdConfig.WRITE_REVIEW}
        >
            {FeedbackConfig.BUTTON_ADD_FEEDBACK}
        </Button>
    );
}
