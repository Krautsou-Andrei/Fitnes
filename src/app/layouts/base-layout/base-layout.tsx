import { AppSider } from '@widgets/app-sider';
import { AppHeader } from '@widgets/app-header';
import { AppFooter } from '@widgets/app-footer';

import { AppLayout } from '@shared/ui';
import { usePageIsEqual } from '@shared/hooks';

import styles from './base-layout.module.less';

type BaseLayoutProps = {
    isNoTitle?: boolean;
    isNoFooter?: boolean;
};

export function BaseLayout({ isNoTitle, isNoFooter }: BaseLayoutProps) {
    const { isFeedback, isProfile, isSettings } = usePageIsEqual();

    return (
        <AppLayout
            className={isNoTitle ? styles['main-full'] : ''}
            isNoTitle={isNoTitle}
            siderSlot={<AppSider />}
            headerSlot={
                <AppHeader
                    isSimple={isNoTitle}
                    className={isNoTitle && isFeedback ? styles['header-sticky'] : ''}
                />
            }
            footerSlot={isNoFooter || isProfile || isSettings ? null : <AppFooter />}
        />
    );
}
