import { Typography } from 'antd';

import styles from './app-marathons.module.less';
import { splitString } from '@shared/lib';
import { InviteConfig } from '@features/traning/config';

const { Text, Title } = Typography;

export function AppMarathons() {
    return (
        <div className={styles.marathons}>
            <div className={styles.container}>
                <Title level={3} className={styles.title}>
                    {splitString(InviteConfig.TITLE_MARATHONS)}
                </Title>
                <Text type='secondary'>{splitString(InviteConfig.DESCRIPTION_MARATHONS)}</Text>
            </div>
        </div>
    );
}
