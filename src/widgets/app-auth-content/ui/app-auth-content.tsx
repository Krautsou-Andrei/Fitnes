import { ReactElement } from 'react';

import { AppIcon, AppTabs } from '@shared/ui';
import { tabsAuthConfig } from '@shared/config/tabs-auth-config';

import styles from './app-auth-content.module.less';

type AppAuthContentProps = {
    children: ReactElement;
};

export function AppAuthContent({ children }: AppAuthContentProps) {
    return (
        <div className={styles['content']}>
            <AppIcon
                className={styles['content-logo']}
                name='layout/logo-big'
                width={309}
                height={78}
            />
            <AppTabs activeTab='1' items={tabsAuthConfig} />
            {children}
        </div>
    );
}
