import { Badge, Typography } from 'antd';
import clsn from 'classnames';

import { BestExerciseDaysPeriod, TrainingsMiddleDays } from '@features/achievements/model/types';
import { getNameDateTable } from '@features/achievements/lib';

import { splitString } from '@shared/lib';

import styles from './table-achievements.module.less';

const { Text } = Typography;
type TableAchievementsProps = {
    trainings: (TrainingsMiddleDays | BestExerciseDaysPeriod)[];
    title?: string;
    classNames?: string;
    isDate?: boolean;
    isDay?: boolean;
    tick?: string;
};

export function TableAchievements({
    trainings,
    classNames,
    isDate,
    isDay,
    title,
    tick,
}: TableAchievementsProps) {
    return (
        <div className={clsn(styles['table-wrapper'], classNames)}>
            {title && <Text>{splitString(title)}</Text>}
            <div className={styles.table}>
                {trainings.map((training, index) => (
                    <div key={training.date} className={styles['table-line']}>
                        <Badge
                            count={index + 1}
                            className={clsn({ [styles.active]: training.value })}
                        ></Badge>
                        <Text type='secondary'>
                            {getNameDateTable({
                                date: training.date,
                                isDate: isDate,
                                isDay: isDay,
                            })}
                        </Text>
                        {training.value ? (
                            <Text strong>
                                {training.value.toLocaleString('ru-RU')} {tick ? tick : ''}
                            </Text>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}
