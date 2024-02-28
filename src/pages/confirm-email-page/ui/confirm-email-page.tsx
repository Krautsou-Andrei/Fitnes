import { useConfirmEmailPage } from '../lib/use-confirm-email-page';

import { ConfirmForm } from '@features/confirm-email';
import { AppResultCard } from '@features/result';
import { confirmConfig, ConfirmPageConfig } from '@features/confirm-email';

import { AppBackgroundBlur, AppGuestContent } from '@shared/ui';

import styles from './confirm-email-page.module.less';

export function ConfirmEmailPage() {
    const { cardTitle, cardDescription } = useConfirmEmailPage({
        classNames: [styles['select-text'], styles['select-text-block']],
    });

    return (
        <AppBackgroundBlur>
            <AppGuestContent>
                <AppResultCard
                    title={cardTitle}
                    description={cardDescription}
                    icon={confirmConfig[ConfirmPageConfig.CONFIRM_EMAIL].icon}
                    className={styles['confirm-content']}
                    classNameIcon={styles[ConfirmPageConfig.CONFIRM_EMAIL]}
                >
                    <ConfirmForm />
                </AppResultCard>
            </AppGuestContent>
        </AppBackgroundBlur>
    );
}
