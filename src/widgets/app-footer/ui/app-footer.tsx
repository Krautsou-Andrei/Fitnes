import { Button } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

import { Extra } from './extra';

import { LayoutConfig } from '@shared/config';
import { AppCardActive } from '@shared/ui';

import styles from './app-footer.module.less';

export function AppFooter() {
    return (
        <Footer className={styles['app-footer']}>
            <Button className={styles['button-reviews']} type='link'>
                {LayoutConfig.BUTTON_REVIEWS}
            </Button>
            <AppCardActive className={styles['footer-card']} extra={<Extra />} bordered={false}>
                <Button type='text'>
                    <AndroidFilled />
                    <span>{LayoutConfig.BUTTON_ANDROID}</span>
                </Button>
                <Button type='text'>
                    <AppleFilled />
                    <span>{LayoutConfig.BUTTON_APPLE}</span>
                </Button>
            </AppCardActive>
        </Footer>
    );
}
