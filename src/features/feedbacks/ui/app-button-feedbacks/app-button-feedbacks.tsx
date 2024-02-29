import { LayoutConfig } from '@shared/config';
import { Button } from 'antd';
import clsn from 'classnames';

import { useButtonFeedback } from './lib/use-button-feedbacks';

import styles from './app-button-feedbacks.module.less';

type AppButtonFeedbacksProps = {
    className?: string;
};

export function AppButtonFeedbacks({ className }: AppButtonFeedbacksProps) {
    const { onclick } = useButtonFeedback();

    return (
        <Button
            className={clsn(styles['button-feedbacks'], className)}
            type='link'
            onClick={onclick}
        >
            {LayoutConfig.BUTTON_REVIEWS}
        </Button>
    );
}
