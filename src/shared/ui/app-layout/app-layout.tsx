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
    const { isCalendar, styleCollapsed } = useAppLayout();

    return (
        <Layout className={clsn(styles['main-page'], className)}>
            {siderSlot}
            <Layout style={!isAuthLayout ? styleCollapsed : {}}>
                {headerSlot}
                <div
                    className={clsn(styles['main-content'], {
                        [styles['main-content-simple']]: isSimple && !isCalendar,
                    })}
                >
                    <Outlet />
                </div>
                {footerSlot}
            </Layout>
        </Layout>
    );
}
