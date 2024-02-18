import { ReactNode } from 'react';
import clsn from 'classnames';
import { Button, Typography } from 'antd';

import { AppCard } from '@shared/ui';

import styles from './app-result-card.module.less';

const { Title, Text } = Typography;

type Props = {
    buttonBlock?: boolean;
    buttonTitle: string;
    children: ReactNode;
    classNameIcon?: string;
    description: string;
    onClick: () => void;
    title: string;
};

export function AppResultCard({
    children,
    buttonBlock,
    buttonTitle,
    classNameIcon,
    description,
    onClick,
    title,
}: Props) {
    return (
        <AppCard className={styles['result-card']}>
            <div className={clsn(styles.icon, classNameIcon)}>{children}</div>
            <div className={styles.description}>
                <Title level={3}>{title}</Title>
                <Text>{description}</Text>
            </div>
            <Button type='primary' onClick={onClick} block={buttonBlock} size='large'>
                {buttonTitle}
            </Button>
        </AppCard>
    );
}
