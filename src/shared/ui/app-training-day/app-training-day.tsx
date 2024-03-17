import { Space } from 'antd';
import { AppBadge } from '@shared/ui/app-badge/@ex/app-training-day';

import styles from './app-training-day.module.less';

type AppTrainingDayProps = {
    name: string;
    isImplementation: boolean;
};

export function AppTrainingDay({ name, isImplementation }: AppTrainingDayProps) {
    return (
        <Space className={styles['training-day']}>
            <AppBadge name={name} />
            <div className={isImplementation ? styles['training-day-disabled'] : ''}>{name}</div>
        </Space>
    );
}
