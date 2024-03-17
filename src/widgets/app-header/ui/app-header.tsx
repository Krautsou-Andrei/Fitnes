import { Header } from 'antd/lib/layout/layout';
import { Typography } from 'antd';
import clsn from 'classnames';

import { AppBreadcrumb } from './app-breadcrumb';
import { AppSettingsButton } from './app-settings-button';

import { LayoutConfig } from '@shared/config';
import { usePageIsEqual } from '@shared/hooks';

import styles from './app-header.module.less';

const { Title } = Typography;

type AppHeaderProps = {
    className?: string;
    isSimple?: boolean;
};

export function AppHeader({ className, isSimple }: AppHeaderProps) {
    const { isCalendar } = usePageIsEqual();

    return (
        <Header className={clsn(styles['app-header'], className)}>
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
            {isCalendar && <AppSettingsButton className={styles['setting-traning-page']} />}
        </Header>
    );
}
