import { Button } from 'antd';
import clsn from 'classnames';
import { push } from 'redux-first-history';

import { useAppDispatch } from '@shared/hooks';
import { HistoryStateConfig, LayoutConfig, PathConfig } from '@shared/config';

import styles from './app-button-feedbacks.module.less';

type AppButtonFeedbacksProps = {
    className?: string;
};

export function AppButtonFeedbacks({ className }: AppButtonFeedbacksProps) {
    const dispatch = useAppDispatch();

    const onclick = async () => {
        dispatch(push(PathConfig.FEEDBACKS, { feedbacks: HistoryStateConfig.FEEDBACK_PAGE }));
    };

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
