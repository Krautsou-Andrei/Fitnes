import { Badge } from 'antd';
import { mapBadge } from './config';

import styles from './app-badge.module.less';

type AppBadgeProps = {
    name: string;
};

export function AppBadge({ name }: AppBadgeProps) {
    return <Badge className={styles.badge} color={mapBadge[name]} />;
}
