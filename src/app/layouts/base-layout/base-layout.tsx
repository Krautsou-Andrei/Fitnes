import React from 'react';
import { Layout } from 'antd';

import { AppSider } from '@widgets/app-sider';
import { AppLayout } from '@shared/ui';

const { Header, Footer } = Layout;

const BaseLayout: React.FC = () => {
    return (
        <AppLayout
            siderSlot={<AppSider />}
            headerSlot={<Header />}
            footerSlot={
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            }
        />
    );
};

export default BaseLayout;
