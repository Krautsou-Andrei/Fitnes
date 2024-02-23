import { ReactNode } from 'react';
import clsn from 'classnames';

import { tabsAuthConfig } from '../config/tabs-auth-config';

import { AppIcon, AppTabs } from '@shared/ui';

import styles from './app-auth-content.module.less';

type AppAuthContentProps = {
    children: ReactNode;
};

export function AppAuthContent({ children }: AppAuthContentProps) {
    return (
        <div className={clsn(styles['content'])}>
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
