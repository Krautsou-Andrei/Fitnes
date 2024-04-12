import { ReactNode } from 'react';
import clsn from 'classnames';

import { selectIsCollapsed } from '@widgets/app-sider';

import { WorkoutsConfig } from '@features/traning/config';

import { selectPals } from '@entities/training';
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
    const partners = useAppSelector(selectPals);

    const count = invities.length;
    const isMaxPartners = partners.length >= WorkoutsConfig.MAX_PARTNERS;

    return (
        <>
            {icon ? (
                count !== 0 && !isMaxPartners ? (
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
