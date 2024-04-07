import { ReactNode } from 'react';
import clsn from 'classnames';

import styles from './app-content-wrapper.module.less';

type AppContentWrapperProps = {
    children: ReactNode;
    classNames?: string;
};

export function AppContentWrapper({ children, classNames }: AppContentWrapperProps) {
    return <div className={clsn(styles['content-wrapper'], classNames)}>{children}</div>;
}
