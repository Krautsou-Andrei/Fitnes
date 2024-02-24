import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import clsn from 'classnames';
import { Layout } from 'antd';

import styles from './app-layout.module.less';

type AppLayoutProps = {
    className?: string;
    siderSlot?: ReactNode;
    headerSlot?: ReactNode;
    footerSlot?: ReactNode;
};

export function AppLayout({ className, siderSlot, headerSlot, footerSlot }: AppLayoutProps) {
    return (
        <Layout className={clsn(styles['main-page'], className)}>
            {siderSlot}
            <Layout>
                {headerSlot}
                <div className={styles['main-content']}>
                    <Outlet />
                </div>
                {footerSlot}
            </Layout>
        </Layout>
    );
}
