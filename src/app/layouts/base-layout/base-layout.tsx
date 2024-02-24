import { AppSider } from '@widgets/app-sider';
import { AppHeader } from '@widgets/app-header';
import { AppFooter } from '@widgets/app-footer';

import { AppLayout } from '@shared/ui';

export function BaseLayout() {
    return (
        <AppLayout 
            siderSlot={<AppSider />} 
            headerSlot={<AppHeader />} 
            footerSlot={<AppFooter />} 
        />
    );
}
