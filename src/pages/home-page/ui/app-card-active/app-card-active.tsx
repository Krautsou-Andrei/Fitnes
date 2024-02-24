import { Button, type CardProps } from 'antd';

import { type CardActive } from './model/types';
import { AppCard } from '@shared/ui';

import styles from './app-card-active.module.less';

interface AppCardActiveProps extends CardProps {
    card: CardActive;
}

export function AppCardActive({ card }: AppCardActiveProps) {
    return (
        <AppCard className={styles['app-card']} title={card.title}>
            <Button type='link' href={card.button.href}>
                {card.button.icon}
                {card.button.title}
            </Button>
        </AppCard>
    );
}
