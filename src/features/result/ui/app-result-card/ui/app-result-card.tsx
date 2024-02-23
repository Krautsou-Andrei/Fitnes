import { ReactElement, ReactNode } from 'react';
import clsn from 'classnames';
import { Typography } from 'antd';

import { AppGuestContent, AppGuestContentPadding } from '@shared/ui';
import { splitString } from '@shared/lib';

import styles from './app-result-card.module.less';

const { Title, Text } = Typography;

type Props = {
    icon: ReactElement;
    children: ReactNode;
    className?: string;
    classNameIcon?: string;
    description: string;
    title: string;
};

export function AppResultCard({
    children,
    icon,
    className,
    classNameIcon,
    description,
    title,
}: Props) {
    const cardTitle = splitString(title);
    return (
        <AppGuestContent className={styles['result-card']}>
            <AppGuestContentPadding className={clsn(styles['result-card-content'], className)}>
                <div className={clsn(styles.icon, classNameIcon)}>{icon}</div>
                <div className={styles.description}>
                    <Title level={3}>{cardTitle}</Title>
                    <Text> {description}</Text>
                </div>
                {children}
            </AppGuestContentPadding>
        </AppGuestContent>
    );
}
