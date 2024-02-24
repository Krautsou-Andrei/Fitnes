import { ReactNode } from 'react';
import clsn from 'classnames';

import styles from './app-guest-content.module.less';

type AppGuestContentProps = {
    children: ReactNode;
    className?: string;
};

export function AppGuestContent({ children, className }: AppGuestContentProps) {
    return <div className={clsn(styles.content, className)}>{children}</div>;
}
