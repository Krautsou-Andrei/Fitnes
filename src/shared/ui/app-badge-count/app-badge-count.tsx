import { ReactNode } from 'react';
import clsn from 'classnames';

import { selectIsCollapsed } from '@widgets/app-sider';

import { selectGetInvities } from '@entities/invite';
import { useAppSelector } from '@shared/hooks';
import { DataTestIdConfig } from '@shared/config';

import styles from './app-badge-count.module.less';

type AppBadgeCountProps = {
    icon?: ReactNode;
};

export function AppBadgeCount({ icon }: AppBadgeCountProps) {
    const invities = useAppSelector(selectGetInvities);
    const isCollapsed = useAppSelector(selectIsCollapsed);

    const count = invities.length;

    return (
        <>
            {icon ? (
                count !== 0 ? (
                    <span className='ant-badge ant-menu-item-icon'>
                        {icon}
                        <sup
                            data-test-id={DataTestIdConfig.NOTIFICATION_ABOUT_JOINT_TRAINING}
                            data-show='true'
                            className={clsn('ant-scroll-number ant-badge-count', styles.badge, {
                                [styles.collapsed]: isCollapsed,
                            })}
                            title={`${count}`}
                        >
                            <span className='ant-scroll-number-only'>
                                <span className='ant-scroll-number-only-unit current'>{count}</span>
                            </span>
                        </sup>
                    </span>
                ) : (
                    icon
                )
            ) : (
                <sup
                    data-show='true'
                    className={clsn('ant-scroll-number ant-badge-count')}
                    title={`${count}`}
                >
                    <span className='ant-scroll-number-only'>
                        <span className='ant-scroll-number-only-unit current'>{count}</span>
                    </span>
                </sup>
            )}
        </>
    );
}
