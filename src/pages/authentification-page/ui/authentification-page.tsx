import { AppAuthContent } from '@widgets/app-auth-content';

import { LoginForm } from '@features/authentification';

import { AppBackgroundBlur } from '@shared/ui';

import styles from './authentification-page.module.less';

export function AuthentificationPage() {
    return (
        <AppBackgroundBlur>
            <AppAuthContent claccName={styles['content-authentification']}>
                <LoginForm />
            </AppAuthContent>
        </AppBackgroundBlur>
    );
}
