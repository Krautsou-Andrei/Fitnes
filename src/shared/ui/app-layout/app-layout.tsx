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
    isNoTitle?: boolean;
};

export function AppLayout({
    className,
    siderSlot,
    headerSlot,
    footerSlot,
    isAuthLayout,
    isNoTitle,
}: AppLayoutProps) {
    const { isAchievements, isCalendar, isTrainings, styleCollapsed } = useAppLayout();

    return (
        <Layout className={clsn(styles['main-page'], className)}>
            {siderSlot}
            <Layout
                className={styles['content-wrapper']}
                style={!isAuthLayout ? styleCollapsed : {}}
            >
                {headerSlot}
                <div
                    className={clsn(styles['main-content'], {
                        [styles['main-content-simple']]:
                            isNoTitle && !isCalendar && !isTrainings && !isAchievements,
                    })}
                >
                    <Outlet />
                </div>
                {footerSlot}
            </Layout>
        </Layout>
    );
}
