import React from 'react';

import { AppSider } from '@widgets/app-sider';
import { AppHeader } from '@widgets/app-header';
import { AppFooter } from '@widgets/app-footer';

import { AppLayout } from '@shared/ui';

const BaseLayout: React.FC = () => {
    return (
        <AppLayout 
            siderSlot={<AppSider />} 
            headerSlot={<AppHeader />} 
            footerSlot={<AppFooter />} 
        />
    );
};

export default BaseLayout;
