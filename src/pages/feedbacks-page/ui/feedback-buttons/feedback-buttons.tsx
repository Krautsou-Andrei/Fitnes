import { useState } from 'react';
import { Button } from 'antd';
import clsn from 'classnames';

import { NewFeedbackButton, NewFeedbackModal } from '@features/feedbacks';

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
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onClick = () => {
        setIsOpenModal((prevState) => !prevState);
    };

    return (
        <div className={clsn(styles['feedback-buttons'], className)}>
            <NewFeedbackModal isOpen={isOpenModal} onClick={onClick} />
            <NewFeedbackButton onClick={onClick} />
            <Button type='link' className={styles['button-view-all']} onClick={viewAllFeedback}>
                {isAllFeedbacks ? 'Свернуть все отзывы' : 'Развернуть все отзывы'}
            </Button>
        </div>
    );
}
