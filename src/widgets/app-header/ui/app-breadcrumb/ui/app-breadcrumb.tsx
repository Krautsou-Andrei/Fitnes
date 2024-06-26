import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import { LayoutConfig, PathConfig } from '@shared/config';
import { usePageIsEqual } from '@shared/hooks';

import styles from './app-breadcrumb.module.less';

export function AppBreadcrumb() {
    const { isAchievements, isCalendar, isFeedback, isTrainings } = usePageIsEqual();

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
            {isTrainings && (
                <Breadcrumb.Item>
                    <Link to={PathConfig.TRAINING}>{LayoutConfig.TRAINING}</Link>
                </Breadcrumb.Item>
            )}
            {isAchievements && (
                <Breadcrumb.Item>
                    <Link to={PathConfig.ACHIEVEMENTS}>{LayoutConfig.ACIEVEMENTS}</Link>
                </Breadcrumb.Item>
            )}
        </Breadcrumb>
    );
}
