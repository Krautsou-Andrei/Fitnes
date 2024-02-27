import Lottie from 'lottie-react';
import loader from './loader.json';

import { AppBackgroundBlur } from '@shared/ui/app-background-blur/@ex/app-loader';
import { DataTestIdConfig } from '@shared/config';

import styles from './app-loader.module.less';

export function AppLoader() {
    return (
        <div className={styles.loader}>
            <AppBackgroundBlur>
                <Lottie
                    animationData={loader}
                    loop={true}
                    className={styles['loader__spinner']}
                    data-test-id={DataTestIdConfig.LOADER}
                />
            </AppBackgroundBlur>
        </div>
    );
}
