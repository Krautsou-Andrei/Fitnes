import { Content } from 'antd/lib/layout/layout';

import { useMyTrainingsPage } from '../hooks';

import { AppTabsTrainings } from '@widgets/app-tabs-trainings';
import { AppContentWrapper } from '@shared/ui';

import styles from './my-trainings-page.module.less';

export function MyTrainingsPage() {
    useMyTrainingsPage();

    return (
        <Content className={styles['my-traning-page']}>
            <AppContentWrapper>
                <AppTabsTrainings classNames={styles['tabs']} />
            </AppContentWrapper>
        </Content>
    );
}
