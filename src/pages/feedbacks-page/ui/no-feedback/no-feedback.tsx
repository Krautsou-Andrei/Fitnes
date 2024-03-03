import clsn from 'classnames';
import { Typography } from 'antd';

import { FeedbackConfig } from '@pages/feedbacks-page/config/feedback-config';
import { useOpenNewFeedbackModal } from '@pages/feedbacks-page/hooks';

import { NewFeedbackButton } from '@features/feedbacks';

import { AppCard } from '@shared/ui';
import { splitString } from '@shared/lib';

import styles from './no-feedback.module.less';

const { Title, Text } = Typography;

type NoFeddbackProps = {
    className?: string;
};

export function NoFeddback({ className }: NoFeddbackProps) {
    const { isOpenModal, onClick } = useOpenNewFeedbackModal();

    const description = splitString(FeedbackConfig.DESCRIPTION);
    return (
        <div className={clsn(styles['no-feedback-card-wrapper'], className)}>
            {!isOpenModal && (
                <>
                    <AppCard className={styles['no-feedback-card']}>
                        <Title level={3} className={styles.title}>
                            {FeedbackConfig.TITLE}
                        </Title>
                        <Text className={styles.description}>{description}</Text>
                    </AppCard>
                    <NewFeedbackButton onClick={onClick} />
                </>
            )}
        </div>
    );
}
