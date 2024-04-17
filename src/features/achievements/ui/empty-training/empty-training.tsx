import { Typography } from 'antd';

import emptyTraining from '@public/assets/empty_training.png';
import { AchievementsConfig } from '@features/achievements/config';

import styles from './empty-training.module.less';

const { Title } = Typography;

type EmptyTrainingProps = {
    isMonth?: boolean;
};

export function EmptyTraining({ isMonth }: EmptyTrainingProps) {
    return (
        <div className={styles['empty-training']}>
            <div className={styles.content}>
                <img src={emptyTraining} alt='' />
                <Title level={3}>
                    {isMonth
                        ? AchievementsConfig.TITLE_EMPTY_MONTH
                        : AchievementsConfig.TITLE_EMPTY_WEEK}
                </Title>
            </div>
        </div>
    );
}
