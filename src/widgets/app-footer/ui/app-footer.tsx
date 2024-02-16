import { Button } from 'antd';
import { Footer } from 'antd/lib/layout/layout';

import { AppCardFooter } from './app-card-footer';

import { LayoutConfig } from '@shared/config';

import styles from './app-footer.module.less';

export function AppFooter() {
    return (
        <Footer className={styles['app-footer']}>
            <Button className={styles['button-reviews']} type='link'>
                {LayoutConfig.BUTTON_REVIEWS}
            </Button>
            <AppCardFooter />
        </Footer>
    );
}
