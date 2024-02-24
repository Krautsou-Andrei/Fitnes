import { type CardProps, List, Typography } from 'antd';

import type { CardText } from './model/types';
import { AppCard } from '@shared/ui';

import styles from './app-card-text.module.less';


const { Text, Title } = Typography;

interface AppCardTextProps extends CardProps {
    card: CardText;
}

export function AppCardText({ card }: AppCardTextProps) {
    return (
        <AppCard className={styles['app-card']}>
            {card.description ? (
                <List
                    className={styles.hightlight}
                    header={<span>{card.title}</span>}
                    dataSource={card.description}
                    renderItem={(item) => (
                        <List.Item>
                            <Text>— </Text>
                            {item}
                        </List.Item>
                    )}
                ></List>
            ) : (
                <Title level={4}>{card.title}</Title>
            )}
        </AppCard>
    );
}
