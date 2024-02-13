import { Card, type CardProps, List, Typography } from 'antd';
import clsn from 'classnames';

import type { CardText } from './model/types';

import styles from './app-card-text.module.less';

const { Text, Title } = Typography;

interface Props extends CardProps {
    card: CardText;
    className?: string;
}

export function AppCardText({ card, className, ...rest }: Props) {
    return (
        <Card className={clsn(styles['app-card'], className)} {...rest}>
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
        </Card>
    );
}
