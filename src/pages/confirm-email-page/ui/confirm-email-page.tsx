import { ConfirmForm } from '@features/confirm-email';
import { AppResultCard } from '@features/result';

import { SessionStorageConfig, confirmConfig } from '@shared/config';

import { TypePage } from '@shared/types/app';
import { AppBackgroundBlur, AppGuestContent } from '@shared/ui';

import styles from './confirm-email-page.module.less';

export function ConfirmEmailPage() {
    const sessionStorageEmail = sessionStorage.getItem(SessionStorageConfig.EMAIL);
    const email = sessionStorageEmail ? sessionStorageEmail : '';

    return (
        <AppBackgroundBlur>
            <AppGuestContent>
                <AppResultCard
                    title={confirmConfig[TypePage.CONFIRM_EMAIL].title}
                    description={confirmConfig[TypePage.CONFIRM_EMAIL].description(email)}
                    icon={confirmConfig[TypePage.CONFIRM_EMAIL].icon}
                    classNameIcon={styles[TypePage.CONFIRM_EMAIL]}
                >
                    <ConfirmForm />
                </AppResultCard>
            </AppGuestContent>
        </AppBackgroundBlur>
    );
}
