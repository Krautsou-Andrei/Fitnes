import { AppAuthContent } from '@widgets/app-auth-content';
import { AppForm } from '@shared/ui';

import styles from './page-register.module.less';

export function PageRegister() {
    return (
        <div className={styles['main-content']}>
            <AppAuthContent>
                <AppForm />
            </AppAuthContent>
        </div>
    );
}
