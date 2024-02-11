import { ReactNode } from 'react';
import { Layout } from 'antd';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import styles from './app-layout.module.less';

type Props = {
    siderSlot?: ReactNode;
    headerSlot: ReactNode;
    footerSlot?: ReactNode;
};

export function AppLayout({ siderSlot, headerSlot, footerSlot }: Props) {
    return (
        <Layout className={styles['main-page']}>
            {siderSlot}
            <Layout>
                {headerSlot}
                <div className={styles['main-content']}>
                    <Outlet />
                </div>
                {footerSlot}
            </Layout>
            <ScrollRestoration />
        </Layout>
    );
}
