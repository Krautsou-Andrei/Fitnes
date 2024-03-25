import { Content } from 'antd/lib/layout/layout';

import { ProfileForm } from '@features/profile';

import { AppContentWrapper } from '@shared/ui';

import styles from './profile-page.module.less';

export function ProfilePage() {
    return (
        <Content className={styles['profile-page']}>
            <AppContentWrapper>
                <ProfileForm />
            </AppContentWrapper>
        </Content>
    );
}
