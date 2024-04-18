import { Card, Typography } from 'antd';

import { splitString } from '@shared/lib';

import styles from './exercise-info-achievements.module.less';

const { Text, Title } = Typography;

type ExercisesInfoAchievementsProps = {
    description: string;
    title: string;
};

export function ExercisesInfoAchievements({ description, title }: ExercisesInfoAchievementsProps) {
    return (
        <Card className={styles.card} bordered={false}>
            <Text>{splitString(description)} </Text>
            <Title level={3}>{title}</Title>
        </Card>
    );
}
