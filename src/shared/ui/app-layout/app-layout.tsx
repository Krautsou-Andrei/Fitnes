import { ReactNode } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import clsn from 'classnames';
import { Layout } from 'antd';

import styles from './app-layout.module.less';

type Props = {
    className?: string;
    siderSlot?: ReactNode;
    headerSlot?: ReactNode;
    footerSlot?: ReactNode;
};

export function AppLayout({ className, siderSlot, headerSlot, footerSlot }: Props) {
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
