import { AppSider } from '@widgets/app-sider';
import { AppHeader } from '@widgets/app-header';
import { AppFooter } from '@widgets/app-footer';

import { AppLayout } from '@shared/ui';

type BaseLayoutProps = {
    isSimple?: boolean;
};

export function BaseLayout({ isSimple }: BaseLayoutProps) {
    return (
        <AppLayout
            siderSlot={<AppSider />}
            headerSlot={<AppHeader isSimple={isSimple} />}
            footerSlot={!isSimple ? <AppFooter /> : null}
        />
    );
}
