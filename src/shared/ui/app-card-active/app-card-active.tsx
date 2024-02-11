import { ReactNode } from 'react';
import { Card, type CardProps } from 'antd';
import clsn from 'classnames';

import styles from './app-card-active.module.less';

interface Props extends CardProps {
    children: ReactNode;
    className?: string;
}

export function AppCardActive({ children, className, ...rest }: Props) {
    return (
        <Card className={clsn(styles['app-card'], className)} {...rest} bordered={false}>
            {children}
        </Card>
    );
}
