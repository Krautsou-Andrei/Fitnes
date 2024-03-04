import { AppSider } from '@widgets/app-sider';
import { AppHeader } from '@widgets/app-header';
import { AppFooter } from '@widgets/app-footer';

import { AppLayout } from '@shared/ui';

import styles from './base-layout.module.less';

type BaseLayoutProps = {
    isSimple?: boolean;
};

export function BaseLayout({ isSimple }: BaseLayoutProps) {
    return (
        <AppLayout
            className={isSimple ? styles['main-simple'] : ''}
            isSimple={isSimple}
            siderSlot={<AppSider />}
            headerSlot={
                <AppHeader
                    isSimple={isSimple}
                    className={isSimple ? styles['header-sticky'] : ''}
                />
            }
            footerSlot={!isSimple ? <AppFooter /> : null}
        />
    );
}
