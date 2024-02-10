import { Breadcrumb } from 'antd';
import { LayoutConfig } from '@shared/config';

import styles from './app-breadcrumb.module.less';

export function AppBreadcrumb() {
    return (
        <Breadcrumb className={styles['app-breadcrumb']}>
            <Breadcrumb.Item>{LayoutConfig.HOME}</Breadcrumb.Item>
        </Breadcrumb>
    );
}
