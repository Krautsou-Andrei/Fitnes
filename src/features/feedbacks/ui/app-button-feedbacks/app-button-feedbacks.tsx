import { Button, ButtonProps } from 'antd';
import clsn from 'classnames';
import { push } from 'redux-first-history';

import { useAppDispatch } from '@shared/hooks';
import {BASENAME, DataTestIdConfig, HistoryStateConfig, LayoutConfig, PathConfig } from '@shared/config';

import styles from './app-button-feedbacks.module.less';

type AppButtonFeedbacksProps = ButtonProps & {
    className?: string;
    buttonText?: string;
};

export function AppButtonFeedbacks({ className, buttonText, ...rest }: AppButtonFeedbacksProps) {
    const dispatch = useAppDispatch();

    const onclick = async () => {
        dispatch(push(`${BASENAME}${PathConfig.FEEDBACKS}`, { feedbacks: HistoryStateConfig.FEEDBACK_PAGE }));
    };

    return (
        <Button
            className={clsn(styles['button-feedbacks'], className)}
            type='link'
            onClick={onclick}
            data-test-id={DataTestIdConfig.SEE_REVIEWS}
            {...rest}
        >
            {buttonText ? buttonText : LayoutConfig.BUTTON_REVIEWS}
        </Button>
    );
}
