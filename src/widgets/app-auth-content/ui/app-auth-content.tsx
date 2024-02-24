import { ReactNode } from 'react';
import clsn from 'classnames';

import { tabsAuthConfig } from '../config/tabs-auth-config';
import { useAuthContentMediaQuery } from '../lib/use-auth-content-media-query';

import { AppGuestContentPadding, AppIcon, AppTabs } from '@shared/ui';

import styles from './app-auth-content.module.less';

type AppAuthContentProps = {
    children: ReactNode;
    className?: string;
};

export function AppAuthContent({ children, className }: AppAuthContentProps) {
    const { heightLogo, withLogo } = useAuthContentMediaQuery();

    return (
        <AppGuestContentPadding className={clsn(styles['content'], className)}>
            <AppIcon
                className={styles['content-logo']}
                name='layout/logo-big'
                width={withLogo}
                height={heightLogo}
            />
            <AppTabs items={tabsAuthConfig} />
            {children}
        </AppGuestContentPadding>
    );
}
