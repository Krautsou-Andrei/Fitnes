import { Footer } from 'antd/lib/layout/layout';

import { AppCardFooter } from './app-card-footer';

import { AppButtonFeedbacks } from '@features/feedbacks';

import styles from './app-footer.module.less';

export function AppFooter() {
    return (
        <Footer className={styles['app-footer']}>
            <AppButtonFeedbacks className={styles['button-feedbacks']} />
            <AppCardFooter />
        </Footer>
    );
}
