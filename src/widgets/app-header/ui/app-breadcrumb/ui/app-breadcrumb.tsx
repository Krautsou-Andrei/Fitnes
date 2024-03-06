import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import { LayoutConfig, PathConfig } from '@shared/config';
import { usePageIsEqual } from '@shared/hooks';

import styles from './app-breadcrumb.module.less';

export function AppBreadcrumb() {
    const { isCalendar, isFeedback } = usePageIsEqual();

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
            {isCalendar && (
                <Breadcrumb.Item>
                    <Link to={PathConfig.CALENDAR}>{LayoutConfig.CALENDAR}</Link>
                </Breadcrumb.Item>
            )}
        </Breadcrumb>
    );
}
