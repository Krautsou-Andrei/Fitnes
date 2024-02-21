import { ReactElement, ReactNode } from 'react';
import clsn from 'classnames';
import { Typography } from 'antd';

import { AppCard, AppGuestContent } from '@shared/ui';
import { splitString } from '@shared/lib';

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
    const cardTitle = splitString(title);
    return (
        <AppGuestContent>
            <AppCard className={styles['result-card']}>
                <div className={clsn(styles.icon, classNameIcon)}>{icon}</div>
                <div className={styles.description}>
                    <Title level={3}>{cardTitle}</Title>
                    <Text> {description}</Text>
                </div>
                {children}
            </AppCard>
        </AppGuestContent>
    );
}
