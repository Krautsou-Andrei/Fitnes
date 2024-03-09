import { Space } from 'antd';
import { AppBadge } from '@shared/ui';

import styles from './training-day.module.less';

type TrainingDayProps = {
    name: string;
};

export function TrainingDay({ name }: TrainingDayProps) {
    return (
        <Space className={styles['training-day']}>
            <AppBadge name={name} />
            {name}
        </Space>
    );
}
