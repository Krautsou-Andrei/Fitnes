import { Typography } from 'antd';

import { ConfirmForm } from '@features/confirm-password';

import { LayoutConfig } from '@shared/config';
import { AppBackgroundBlur, AppGuestContent } from '@shared/ui';

import styles from './confirm-password-page.module.less';

const { Title } = Typography;

export function ConfirmPasswordPage() {
    return (
        <AppBackgroundBlur>
            <AppGuestContent className={styles.content}>
                <Title className={styles.title} level={3}>
                    {LayoutConfig.TITLE_FORM_CHANGE_PASSWORD}
                </Title>
                <ConfirmForm />
            </AppGuestContent>
        </AppBackgroundBlur>
    );
}
