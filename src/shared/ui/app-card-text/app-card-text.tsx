import { Card, List, Typography } from 'antd';
import clsn from 'classnames';

import { CardText } from '@shared/types/cards';

import styles from './app-card-text.module.less';

const { Text, Title } = Typography;

type Props = {
    card: CardText;
    className?: string;
};

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
                <Title level={4} className={styles['card-title-text']}>
                    {card.title}
                </Title>
            )}
        </Card>
    );
}
