import { Content } from 'antd/lib/layout/layout';

import { AppContentWrapper } from '@shared/ui';

import styles from './achievements-page.module.less';

export function AchievementsPage() {
    return (
        <Content className={styles['my-traning-page']}>
            <AppContentWrapper classNames={styles['content-wrapper']}>
                <div></div>
            </AppContentWrapper>
        </Content>
    );
}
