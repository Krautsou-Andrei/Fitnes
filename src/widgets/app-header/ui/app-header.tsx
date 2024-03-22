import { Header } from 'antd/lib/layout/layout';
import { Typography } from 'antd';
import clsn from 'classnames';

import { AppBreadcrumb } from './app-breadcrumb';
import { AppSettingsButton } from './app-settings-button';
import { AppButtonArrow } from './app-button-arrow';
import { useAppHeader } from '../hooks/use-app-header';

import styles from './app-header.module.less';

const { Title } = Typography;

type AppHeaderProps = {
    className?: string;
    isSimple?: boolean;
};

export function AppHeader({ className, isSimple }: AppHeaderProps) {
    const { isBreadcrumb, isCalendar, isHome, isProfile, isSettings, title } = useAppHeader();

    return (
        <Header
            className={clsn(
                styles['app-header'],
                { [styles['app-header-profile']]: isProfile || isSettings },
                className,
            )}
        >
            {isBreadcrumb ? <AppBreadcrumb /> : null}
            {!isSimple && (
                <div className={styles.content}>
                    <Title level={isHome ? 1 : 4}>
                        {isSettings ? <AppButtonArrow /> : null}
                        {title}
                    </Title>
                    {isSettings ? null : <AppSettingsButton />}
                </div>
            )}
            {isCalendar && <AppSettingsButton className={styles['setting-traning-page']} />}
        </Header>
    );
}
