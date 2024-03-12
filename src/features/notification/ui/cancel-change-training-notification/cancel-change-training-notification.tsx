import { useCallback, useEffect, useRef } from 'react';
import { Button, notification } from 'antd';

import { NotificationConfig } from '@features/notification/config';
import { selectIsLoadingnCalendar } from '@entities/session';
import { useAppSelector } from '@shared/hooks';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

type CancelChangeTrainingNotificationProps = {
    onCancel: () => void;
};

export function CancelChangeTrainingNotification({
    onCancel,
}: CancelChangeTrainingNotificationProps) {
    const [api, contextHolder] = notification.useNotification();
    const isLoadingCalendar = useAppSelector(selectIsLoadingnCalendar);
    const notificationChange = useRef<boolean>(false);

    const openNotificationWithIcon = useCallback(
        (type: NotificationType) => {
            api[type]({
                message: NotificationConfig.MESSAGE,
                description: NotificationConfig.DESCRIPTION,
                duration: Number(NotificationConfig.DURATION),
                closeIcon: (
                    <Button loading={isLoadingCalendar}>{NotificationConfig.BUTTON_TEXT}</Button>
                ),
                placement: 'bottom',
                onClose: onCancel,
            });
            notificationChange.current = true;
        },
        [api, isLoadingCalendar, onCancel],
    );

    useEffect(() => {
        if (isLoadingCalendar) {
            if (!notificationChange.current) openNotificationWithIcon('warning');
        }
    }, [isLoadingCalendar, openNotificationWithIcon]);

    return <>{contextHolder}</>;
}
