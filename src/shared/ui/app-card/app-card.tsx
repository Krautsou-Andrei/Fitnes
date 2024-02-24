import { ReactNode } from 'react';
import { Card, type CardProps } from 'antd';

interface AppCardProps extends CardProps {
    children: ReactNode;
    className?: string;
}

export function AppCard({ children, className, ...rest }: AppCardProps) {
    return (
        <Card className={className} {...rest} bordered={false}>
            {children}
        </Card>
    );
}
