import { Card, Typography } from 'antd';

import { splitString } from '@shared/lib';

import styles from './info-achievements-card.module.less';

const { Title, Text } = Typography;

type InfoAchievementsCardProps = {
    title: string;
    description: string;
};

export function InfoAchievementsCard({ title, description }: InfoAchievementsCardProps) {
    return (
        <Card className={styles.card}>
            <Title level={1}>{title}</Title>
            <Text>{splitString(description)}</Text>
        </Card>
    );
}
