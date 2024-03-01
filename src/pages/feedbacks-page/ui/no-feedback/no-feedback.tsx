import { useState } from 'react';
import clsn from 'classnames';
import { Typography } from 'antd';

import { NoFeedbackConfig } from '@pages/feedbacks-page/config/no-feedback-config';

import { NewFeedbackButton, NewFeedbackModal } from '@features/feedbacks';

import { AppCard } from '@shared/ui';
import { splitString } from '@shared/lib';

import styles from './no-feedback.module.less';

const { Title, Text } = Typography;

type NoFeddbackProps = {
    className?: string;
};

export function NoFeddback({ className }: NoFeddbackProps) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onClick = () => {
        setIsOpenModal((prevState) => !prevState);
    };

    const description = splitString(NoFeedbackConfig.description);
    return (
        <div className={clsn(styles['no-feedback-card-wrapper'], className)}>
            <NewFeedbackModal isOpen={isOpenModal} onClick={onClick} />
            {!isOpenModal && (
                <>
                    <AppCard className={styles['no-feedback-card']}>
                        <Title level={3} className={styles.title}>
                            {NoFeedbackConfig.title}
                        </Title>
                        <Text className={styles.description}>{description}</Text>
                    </AppCard>
                    <NewFeedbackButton onClick={onClick} />
                </>
            )}
        </div>
    );
}
