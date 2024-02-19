import { ReactElement, ReactNode } from 'react';
import clsn from 'classnames';
import { Typography } from 'antd';

import { AppCard } from '@shared/ui';

import styles from './app-result-card.module.less';

const { Title, Text } = Typography;

type Props = {
    icon: ReactElement;
    children: ReactNode;
    classNameIcon?: string;
    description: string;
    title: string;
};

export function AppResultCard({ children, icon, classNameIcon, description, title }: Props) {
    return (
        <AppCard className={styles['result-card']}>
            <div className={clsn(styles.icon, classNameIcon)}>{icon}</div>
            <div className={styles.description}>
                <Title level={3}>{title}</Title>
                <Text>{description}</Text>
            </div>
            {children}
        </AppCard>
    );
}
