import { Badge } from 'antd';

import styles from './app-badge.module.less';

type AppBadgeProps = {
    name: string;
};

type BadgeColorMap = {
    [key: string]: string;
};

const mapBadge: BadgeColorMap = {
    Руки: 'cyan',
    Ноги: 'red',
    Силовая: 'yellow',
    Грудь: 'green',
    Спина: 'orange',
    Кардио: 'magenta',
};

export function AppBadge({ name }: AppBadgeProps) {
    return <Badge className={styles.badge} color={mapBadge[name]} />;
}
