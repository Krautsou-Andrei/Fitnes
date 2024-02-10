import { Header } from 'antd/lib/layout/layout';
import { Typography } from 'antd';
import { AppBreadcrumb } from './app-breadcrumb';
import { AppSettingsButton } from './app-settings-button';

import { LayoutConfig } from '@shared/config';

import styles from './app-header.module.less';

const { Title } = Typography;

export function AppHeader() {
    return (
        <Header className={styles['app-header']}>
            <AppBreadcrumb />
            <div className={styles.content}>
                <Title level={1}>{LayoutConfig.TITLE}</Title>
                <AppSettingsButton />
            </div>
        </Header>
    );
}
