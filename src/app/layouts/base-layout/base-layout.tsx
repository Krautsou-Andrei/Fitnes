import { useBaseLayout } from './hooks/use-base-layout';

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
    useBaseLayout();
    const { isFeedback, isProfile, isSettings, isTrainings } = usePageIsEqual();

    return (
        <AppLayout
            className={isNoTitle && !isTrainings ? styles['main-full'] : ''}
            isNoTitle={isNoTitle}
            siderSlot={<AppSider />}
            headerSlot={
                <AppHeader
                    isSimple={isNoTitle}
                    className={isNoTitle && isFeedback ? styles['header-sticky'] : ''}
                />
            }
            footerSlot={isNoFooter || isProfile || isSettings || isTrainings ? null : <AppFooter />}
        />
    );
}
