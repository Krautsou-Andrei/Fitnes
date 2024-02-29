import { Header } from 'antd/lib/layout/layout';
import { Typography } from 'antd';
import { AppBreadcrumb } from './app-breadcrumb';
import { AppSettingsButton } from './app-settings-button';

import { LayoutConfig } from '@shared/config';

import styles from './app-header.module.less';

const { Title } = Typography;

type AppHeaderProps = {
    isSimple?: boolean;
};

export function AppHeader({ isSimple }: AppHeaderProps) {
    return (
        <Header className={styles['app-header']}>
            <AppBreadcrumb />
            {!isSimple && (
                <div className={styles.content}>
                    <Title level={1}>
                        <div>{LayoutConfig.TITLE_ONE}</div>
                        <div>{LayoutConfig.TITLE_TWO}</div>
                    </Title>
                    <AppSettingsButton />
                </div>
            )}
        </Header>
    );
}
