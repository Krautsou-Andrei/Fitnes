import { Button, ButtonProps } from 'antd';
import clsn from 'classnames';

import { FeedbackConfig } from '../../config/feedback-config';
import { DataTestIdConfig } from '@shared/config';

import styles from './new-feedback-button.module.less';

type NewFeedbackButtonProps = ButtonProps & {
    className?: string;
};

export function NewFeedbackButton({ className, ...rest }: NewFeedbackButtonProps) {
    return (
        <Button
            type='primary'
            className={clsn(styles['button-new-feedback'], className)}
            data-test-id={DataTestIdConfig.WRITE_REVIEW}
            {...rest}
        >
            {FeedbackConfig.BUTTON_ADD_FEEDBACK}
        </Button>
    );
}
