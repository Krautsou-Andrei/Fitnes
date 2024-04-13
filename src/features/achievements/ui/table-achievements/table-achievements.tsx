import { Badge, Typography } from 'antd';
import clsn from 'classnames';

import { TrainingsMiddleDays } from '@features/achievements/model/types';
import { AchievementsConfig } from '@features/achievements/config';
import { AchievementsDefaultConfig, DateFormatConfig } from '@shared/config';
import { formatDate, splitString } from '@shared/lib';

import styles from './table-achievements.module.less';

const { Text } = Typography;
type TableAchievementsProps = {
    trainings: TrainingsMiddleDays[];
    classNames?: string;
};

export function TableAchievements({ trainings, classNames }: TableAchievementsProps) {
    return (
        <div className={clsn(styles['table-wrapper'], classNames)}>
            <Text>{splitString(AchievementsConfig.TITLE_TABLE_ACIEVEMENTS)}</Text>
            <div className={styles.table}>
                {trainings.map((training, index) => (
                    <div key={training.date} className={styles['table-line']}>
                        <Badge
                            count={index + 1}
                            className={clsn({ [styles.active]: training.value })}
                        ></Badge>
                        <Text type='secondary'>
                            {formatDate(training.date, DateFormatConfig.FORMAT_DAY_WEEK)}
                        </Text>
                        {training.value ? (
                            <Text strong>
                                {training.value} {AchievementsDefaultConfig.KG_TYPE}
                            </Text>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}
