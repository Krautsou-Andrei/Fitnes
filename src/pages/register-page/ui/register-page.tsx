import { AppAuthContent } from '@widgets/app-auth-content';

import { RegisterForm } from '@features/register';

import { AppBackgroundBlur, AppGuestContent } from '@shared/ui';

import styles from './register-page.module.less';

export function RegisterPage() {
    return (
        <AppBackgroundBlur>
            <AppGuestContent className={styles['content-register']}>
                <AppAuthContent>
                    <RegisterForm />
                </AppAuthContent>
            </AppGuestContent>
        </AppBackgroundBlur>
    );
}
