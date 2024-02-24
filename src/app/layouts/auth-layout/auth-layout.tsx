import { AppLayout } from '@shared/ui';

import styles from './auth-layout.module.less';

export function AuthLayout() {
    return <AppLayout className={styles['main-page-auth']} />;
}
