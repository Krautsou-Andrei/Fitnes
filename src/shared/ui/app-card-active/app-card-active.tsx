import { ReactNode } from 'react';
import { Button, Card } from 'antd';
import clsn from 'classnames';

import styles from './app-card-active.module.less';

type Props = {
    button: {
        icon: ReactNode;
        title: string;
        href: string;
    };
    className?: string;
    title: string;
};

export function AppCardActive({ className, button, title }: Props) {
    return (
        <Card className={clsn(styles['app-card'], className)} title={title}>
            <Button type='link' href={button.href} icon={button.icon}>
                {button.title}
            </Button>
        </Card>
    );
}
