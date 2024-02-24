import { ReactNode } from 'react';
import clsn from 'classnames';

import styles from './app-guest-content-padding.module.less';

type AppGuestContentPaddingProps = {
    children: ReactNode;
    className?: string;
};

export function AppGuestContentPadding({ children, className }: AppGuestContentPaddingProps) {
    return <div className={clsn(styles['content-padding'], className)}>{children}</div>;
}
