import { ReactNode } from 'react';
import clsn from 'classnames';

import styles from './app-guest-content-padding.module.less';

type Props = {
    children: ReactNode;
    className?: string;
};

export function AppGuestContentPadding({ children, className }: Props) {
    return <div className={clsn(styles['content-padding'], className)}>{children}</div>;
}
