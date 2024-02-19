import { selectSessionRepeatRegister } from '@entities/session/model/slise';

import { ConfirmForm } from '@features/confirm-email';
import { AppResultCard } from '@features/result';

import { confirmEmailConfig } from '@shared/config';
import { useAppSelector } from '@shared/hooks';
import { TypePage } from '@shared/types/app';
import { AppBackgroundBlur } from '@shared/ui';

import styles from './confirm-email-page.module.less';

export function ConfirmEmailPage() {
    const registerParams = useAppSelector(selectSessionRepeatRegister);
    const email = registerParams ? registerParams.email : '';

    return (
        <AppBackgroundBlur>
            <AppResultCard
                title={confirmEmailConfig[TypePage.CONFIRM_EMAIL].title}
                description={confirmEmailConfig[TypePage.CONFIRM_EMAIL].description(email)}
                icon={confirmEmailConfig[TypePage.CONFIRM_EMAIL].icon}
                classNameIcon={styles[TypePage.CONFIRM_EMAIL]}
            >
                <ConfirmForm />
            </AppResultCard>
        </AppBackgroundBlur>
    );
}
