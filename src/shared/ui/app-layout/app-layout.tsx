import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import clsn from 'classnames';
import { Layout } from 'antd';

import { useMainWidth } from '@shared/hooks';

import styles from './app-layout.module.less';

type AppLayoutProps = {
    className?: string;
    siderSlot?: ReactNode;
    headerSlot?: ReactNode;
    footerSlot?: ReactNode;
    isCollapsed?: boolean;
    isAuthLayout?: boolean;
    isSimple?: boolean;
};

export function AppLayout({
    className,
    siderSlot,
    headerSlot,
    footerSlot,
    isAuthLayout,
    isSimple,
}: AppLayoutProps) {
    const { styleCollapsed } = useMainWidth();

    return (
        <Layout className={clsn(styles['main-page'], className)}>
            {siderSlot}
            <Layout style={!isAuthLayout ? styleCollapsed : {}}>
                {headerSlot}
                <div
                    className={clsn(styles['main-content'], {
                        [styles['main-content-simple']]: isSimple,
                    })}
                >
                    <Outlet />
                </div>
                {footerSlot}
            </Layout>
        </Layout>
    );
}
