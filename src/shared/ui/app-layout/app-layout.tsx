import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import clsn from 'classnames';
import { Layout } from 'antd';

import { useAppLayout } from './hooks/use-app-layout';

import styles from './app-layout.module.less';

type AppLayoutProps = {
    className?: string;
    siderSlot?: ReactNode;
    headerSlot?: ReactNode;
    footerSlot?: ReactNode;
    isCollapsed?: boolean;
    isAuthLayout?: boolean;
};

export function AppLayout({
    className,
    siderSlot,
    headerSlot,
    footerSlot,
    isAuthLayout,
}: AppLayoutProps) {
    const { styleCollapsed } = useAppLayout();

    return (
        <Layout className={clsn(styles['main-page'], className)}>
            {siderSlot}
            <Layout style={!isAuthLayout ? styleCollapsed : {}}>
                {headerSlot}
                <div className={styles['main-content']}>
                    <Outlet />
                </div>
                {footerSlot}
            </Layout>
        </Layout>
    );
}
