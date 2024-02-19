import { ReactNode } from 'react';
import { Card, type CardProps } from 'antd';

interface AppCard extends CardProps {
    children: ReactNode;
    className?: string;
}

export function AppCard({ children, className, ...rest }: AppCard) {
    return (
        <Card className={className} {...rest} bordered={false}>
            {children}
        </Card>
    );
}
