import { ReactElement } from 'react';

import styles from './app-backgound-blur.module.less';

type AppBackgroundBlurProps = {
    children: ReactElement;
};

export function AppBackgroundBlur({ children }: AppBackgroundBlurProps) {
    return <div className={styles['background-blur']}>{children}</div>;
}
