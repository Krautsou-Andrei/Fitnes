import { ReactNode } from 'react';
import clsn from 'classnames';
import { Card, type CardProps } from 'antd';

import styles from './app-card.module.less';

interface AppCard extends CardProps {
    children: ReactNode;
    className?: string;
}

export function AppCard({ children, className, ...rest }: AppCard) {
    return (
        <Card className={clsn(styles['app-card'], className)} {...rest} bordered={false}>
            {children}
        </Card>
    );
}
