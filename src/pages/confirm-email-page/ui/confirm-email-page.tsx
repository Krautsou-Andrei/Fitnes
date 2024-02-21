import { selectSessionRepeatRegister } from '@entities/session/model/slise';

import { ConfirmForm } from '@features/confirm-email';
import { AppResultCard } from '@features/result';

import { confirmConfig } from '@shared/config';
import { useAppSelector } from '@shared/hooks';
import { TypePage } from '@shared/types/app';
import { AppBackgroundBlur, AppGuestContent } from '@shared/ui';

import styles from './confirm-email-page.module.less';

export function ConfirmEmailPage() {
    const registerParams = useAppSelector(selectSessionRepeatRegister);
    const email = registerParams ? registerParams.email : '';

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
