import { useState } from 'react';
import { Button } from 'antd';

import { NewFeedbackModal } from '../new-feedback-modal/new-feedback-modal';
import { FeedbackConfig } from '../../config/feedback-config';

import styles from './new-feedback-button.module.less';

export function NewFeedbackButton() {
    const [isOpenNewFeedback, setIsOpenNewFeedback] = useState(false);

    const onClick = () => {
        setIsOpenNewFeedback((prevState) => !prevState);
    };

    return (
        <>
            <NewFeedbackModal isOpen={isOpenNewFeedback} onClick={onClick} />
            <Button type='primary' className={styles['button-new-feedback']} onClick={onClick}>
                {FeedbackConfig.BUTTON_ADD_FEEDBACK}
            </Button>
        </>
    );
}
