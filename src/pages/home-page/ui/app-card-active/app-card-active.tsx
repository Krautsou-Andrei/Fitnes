import { Button, type CardProps } from 'antd';

import { type CardActive } from './model/types';
import { AppCard } from '@shared/ui';
import { useLinkMenuClick } from '@shared/hooks';

import styles from './app-card-active.module.less';

interface AppCardActiveProps extends CardProps {
    card: CardActive;
}

export function AppCardActive({ card }: AppCardActiveProps) {
    const { onClick } = useLinkMenuClick();

    return (
        <AppCard className={styles['app-card']} title={card.title} >
            <Button type='link' onClick={() => onClick(card.button.href)} data-test-id={card.dataTestId}>
                {card.button.icon}
                {card.button.title}
            </Button>
        </AppCard>
    );
}
