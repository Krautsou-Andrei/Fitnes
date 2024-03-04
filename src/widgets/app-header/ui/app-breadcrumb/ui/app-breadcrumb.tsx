import { Breadcrumb } from 'antd';
import { LayoutConfig, PathConfig } from '@shared/config';

import styles from './app-breadcrumb.module.less';
import { Link, useLocation } from 'react-router-dom';

export function AppBreadcrumb() {
    const { pathname } = useLocation();
    const isFeedback = pathname === PathConfig.FEEDBACKS;

    return (
        <Breadcrumb className={styles['app-breadcrumb']}>
            <Breadcrumb.Item>
                <Link to={PathConfig.HOME}>{LayoutConfig.HOME}</Link>
            </Breadcrumb.Item>
            {isFeedback && (
                <Breadcrumb.Item>
                    <Link to={PathConfig.FEEDBACKS}>{LayoutConfig.FEEDBACKS}</Link>
                </Breadcrumb.Item>
            )}
        </Breadcrumb>
    );
}
