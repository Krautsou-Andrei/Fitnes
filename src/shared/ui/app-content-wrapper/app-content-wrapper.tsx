import { ReactNode } from 'react';

import styles from './app-content-wrapper.module.less';

type AppContentWrapperProps = {
    children: ReactNode;
};

export function AppContentWrapper({ children }: AppContentWrapperProps) {
    return <div className={styles['content-wrapper']}>{children}</div>;
}
