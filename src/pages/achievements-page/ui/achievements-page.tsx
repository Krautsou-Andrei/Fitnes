import { Content } from 'antd/lib/layout/layout';

import { useAchievementsPage } from '../hooks';

import { AppTabsTrainings } from '@widgets/app-tabs-trainings';

import { AppContentWrapper } from '@shared/ui';

import styles from './achievements-page.module.less';

export function AchievementsPage() {
    const { state, functions } = useAchievementsPage();
    return (
        <Content className={styles['achievement-page']}>
            <AppContentWrapper classNames={styles['content-wrapper']}>
                <AppTabsTrainings
                    activeKey={state.activeKey}
                    onChangeTab={functions.onChangeTabs}
                />
            </AppContentWrapper>
        </Content>
    );
}
