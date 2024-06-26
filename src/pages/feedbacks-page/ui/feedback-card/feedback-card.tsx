import { Avatar, Image, Rate } from 'antd';
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { customIconStars } from '@features/feedbacks';

import { AppCard } from '@shared/ui';
import { LayoutConfig } from '@shared/config';

import styles from './feedback-card.module.less';

const { Text } = Typography;

type FeedBackCardProps = {
    fullName: string | null;
    imageSrc: string | null;
    message: string | null;
    rating: number;
    createdAt: Date;
};

export function FeedBackCard({
    fullName,
    imageSrc,
    message,
    rating,
    createdAt,
}: FeedBackCardProps) {
    const [firstName = LayoutConfig.USER, lastName] = fullName?.split(' ') ?? [];
    const date = createdAt && new Date(createdAt).toLocaleDateString();

    return (
        <AppCard className={styles['feedback-card']}>
            <div className={styles['feedback-user']}>
                {imageSrc ? (
                    <Image src={imageSrc} width={42} height={42} className={styles.image} />
                ) : (
                    <Avatar size={42} icon={<UserOutlined />}></Avatar>
                )}
                <div className={styles['feedback-user__name']}>
                    <Text>{firstName}</Text>
                    {lastName && <Text>{lastName}</Text>}
                </div>
            </div>
            <div className={styles['feedback-content']}>
                <div className={styles['rating-wrapper']}>
                    <Rate
                        className={styles['feedback-rating']}
                        disabled={true}
                        value={rating}
                        character={customIconStars}
                    />
                    <span className={styles['feedback-date']}>{date}</span>
                </div>
                <Text className={styles['feedback-description']}>{message}</Text>
            </div>
        </AppCard>
    );
}
