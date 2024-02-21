import { AppAuthContent } from '@widgets/app-auth-content';

import { LoginForm } from '@features/authentification';

import { AppBackgroundBlur, AppGuestContent } from '@shared/ui';

import styles from './authentification-page.module.less';

export function AuthentificationPage() {
    return (
        <AppBackgroundBlur>
            <AppGuestContent className={styles['content-authentification']}>
                <AppAuthContent>
                    <LoginForm />
                </AppAuthContent>
            </AppGuestContent>
        </AppBackgroundBlur>
    );
}
