import { Content } from 'antd/lib/layout/layout';
import clsn from 'classnames';

import { useMyTrainingsPage } from '../hooks';

import { AppTabsTrainings } from '@widgets/app-tabs-trainings';
import { AppContentWrapper } from '@shared/ui';

import styles from './my-trainings-page.module.less';

export function MyTrainingsPage() {
    const { state, functions } = useMyTrainingsPage();

    return (
        <Content className={styles['my-traning-page']}>
            <AppContentWrapper
                classNames={clsn(styles['content-wrapper'], {
                    [styles.marathons]: state.isMarathonTabs === 'marathons',
                })}
            >
                <AppTabsTrainings
                    classNames={styles['tabs']}
                    onChangeTab={functions.onChangeTabs}
                />
            </AppContentWrapper>
        </Content>
    );
}
