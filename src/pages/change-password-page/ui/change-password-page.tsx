import { Typography } from 'antd';

import { ChangePasswordForm } from '@features/change-password';

import { LayoutConfig } from '@shared/config';
import { AppBackgroundBlur, AppGuestContent, AppGuestContentPadding } from '@shared/ui';

import styles from './change-password-page.module.less';

const { Title } = Typography;

export function ChangePasswordPage() {
    return (
        <AppBackgroundBlur>
            <AppGuestContent className={styles['change-password']}>
                <AppGuestContentPadding className={styles['change-password-content']}>
                    <Title className={styles.title} level={3}>
                        {LayoutConfig.TITLE_FORM_CHANGE_PASSWORD}
                    </Title>
                    <ChangePasswordForm />
                </AppGuestContentPadding>
            </AppGuestContent>
        </AppBackgroundBlur>
    );
}
