import { ReactNode } from 'react';
import clsn from 'classnames';

import { AppIcon, AppTabs } from '@shared/ui';
import { tabsAuthConfig } from '@shared/config/tabs-auth-config';

import styles from './app-auth-content.module.less';

type AppAuthContentProps = {
    children: ReactNode;
    claccName?: string;
};

export function AppAuthContent({ children, claccName }: AppAuthContentProps) {
    return (
        <div className={clsn(styles['content'], claccName)}>
            <AppIcon
                className={styles['content-logo']}
                name='layout/logo-big'
                width={309}
                height={78}
            />
            <AppTabs items={tabsAuthConfig} />
            {children}
        </div>
    );
}
