import { ReactNode, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import clsn from 'classnames';
import { Layout } from 'antd';

import { selectIsCollapsed } from '@widgets/app-sider';

import { useAppMediaQuery, useAppSelector } from '@shared/hooks';
import { ConstantsMediaQuery } from '@shared/config';

import styles from './app-layout.module.less';

type AppLayoutProps = {
    className?: string;
    siderSlot?: ReactNode;
    headerSlot?: ReactNode;
    footerSlot?: ReactNode;
    isCollapsed?: boolean;
};

const collapsed = {
    marginLeft: `${ConstantsMediaQuery.COLLAPSED}px`,
    transition: 'margin-left 0.2s ease',
};

const noCollapsed = {
    marginLeft: `${ConstantsMediaQuery.COLLAPSED_NO}px`,
    transition: 'margin-left 0.2s ease',
};

export function AppLayout({ className, siderSlot, headerSlot, footerSlot }: AppLayoutProps) {
    const { isQueryMD } = useAppMediaQuery();
    const isCollapsed = useAppSelector(selectIsCollapsed);
    const [styleCollapsed, setStyleCollapsed] = useState((): { [key: string]: string } =>
        !isQueryMD ? noCollapsed : {},
    );

    useEffect(() => {
        if (!isQueryMD) {
            isCollapsed ? setStyleCollapsed(collapsed) : setStyleCollapsed(noCollapsed);

            return;
        }
        setStyleCollapsed({});
    }, [isCollapsed, isQueryMD]);

    return (
        <Layout className={clsn(styles['main-page'], className)}>
            {siderSlot}
            <Layout style={styleCollapsed}>
                {headerSlot}
                <div className={styles['main-content']}>
                    <Outlet />
                </div>
                {footerSlot}
            </Layout>
        </Layout>
    );
}
