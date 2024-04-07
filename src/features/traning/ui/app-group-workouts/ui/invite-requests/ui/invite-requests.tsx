import { useState } from 'react';
import { Avatar, Button, Typography } from 'antd';
import { DownOutlined, UpOutlined, UserOutlined } from '@ant-design/icons';

import { InviteTrainingCard } from '../../invite-training-card';

import { InviteConfig, StatusConfig, TypeTrainingsInviteConfig } from '@features/traning/config';
import { rejectInvitieThunk } from '@features/traning/model/reject-invite';
import { sendAnswerInvitieThunk } from '@features/traning/model/send-answer-invite';

import { selectGetInvities } from '@entities/invite';
import {
    useLazyGetTrainingPalsQuery,
    useLazyGetUserJointTrainingListQuery,
} from '@entities/training';

import { Size } from '@shared/config/constants';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { formatDate, showErrorForDevelop } from '@shared/lib';
import { DateFormatConfig } from '@shared/config';

import styles from './invite-requests.module.less';

const { Text } = Typography;

export function InviteRequests() {
    const dispatch = useAppDispatch();
    const [getJointTraining] = useLazyGetUserJointTrainingListQuery();
    const [getTrainingPal] = useLazyGetTrainingPalsQuery();

    const invities = useAppSelector(selectGetInvities);

    const [openInviteTrainingCard, setOpenInviteTrainingCard] = useState(false);
    const [selectInvite, setSelectInvite] = useState('');
    const [isCollapsed, setIsCollapsed] = useState(true);

    const invitiesRender = isCollapsed ? [invities[0]] : invities;

    const acceptInviteHandler = (id: string) => {
        dispatch(sendAnswerInvitieThunk({ id, status: StatusConfig.ACCEPTED }))
            .unwrap()
            .then(() => {
                getJointTraining();
                getTrainingPal();
            })
            .catch((error: unknown) => {
                showErrorForDevelop('Get training pals', error);
            });
    };

    const rejectInviteHandler = (id: string) => {
        dispatch(rejectInvitieThunk({ id, status: StatusConfig.REJECTED }))
            .unwrap()
            .then(() => getJointTraining())
            .catch((error: unknown) => {
                showErrorForDevelop('Get training pals', error);
            });
    };

    const handlerOpenInviteTrainingCard = (id: string) => {
        setSelectInvite(id);
        setOpenInviteTrainingCard(true);
    };

    if (!invities.length) {
        return null;
    }

    const collapseHandler = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div className={styles['ivite-request']}>
            <Text className={styles['new-sends']} type='secondary'>
                {InviteConfig.NEW_SEND_TITLE}({invities.length})
            </Text>
            {invitiesRender.map((item) => (
                <div key={item.id} className={styles['pal-card']}>
                    <div className={styles['pal-info']}>
                        <Avatar
                            size={Size.SIZE_8_XL}
                            alt={item.from.firstName}
                            src={item.from.imageSrc}
                            icon={<UserOutlined />}
                        />
                        <div className={styles['pal-name']}>
                            <Text>{item.from.firstName}</Text>
                            <Text>{item.from.lastName}</Text>
                        </div>
                    </div>
                    <div className={styles.message}>
                        <Typography.Text type='secondary'>
                            {formatDate(item.createdAt, DateFormatConfig.FORMAT_DD_MN_YYYY_DOT)}
                        </Typography.Text>
                        <Typography.Title level={5}>
                            Привет, я ищу партнёра для совместных{' '}
                            {
                                TypeTrainingsInviteConfig[
                                    item.training.training
                                        .name as keyof typeof TypeTrainingsInviteConfig
                                ]
                            }
                            . Ты хочешь присоединиться ко мне на следующих тренировках?
                        </Typography.Title>
                        <Button
                            className={styles['details-training']}
                            type='text'
                            onClick={() => handlerOpenInviteTrainingCard(item.id)}
                        >
                            {InviteConfig.SHOW_DATAILS_TRAINING}
                        </Button>
                        {openInviteTrainingCard && selectInvite === item.id && (
                            <InviteTrainingCard
                                selectedInvite={item}
                                onClose={() => setOpenInviteTrainingCard(false)}
                            />
                        )}
                    </div>
                    <div className={styles.buttons}>
                        <Button block type='primary' onClick={() => acceptInviteHandler(item.id)}>
                            {InviteConfig.TRAINING_JOINT}
                        </Button>
                        <Button block onClick={() => rejectInviteHandler(item.id)}>
                            {InviteConfig.REJECT_TRAINING}
                        </Button>
                    </div>
                </div>
            ))}

            {invities.length > 1 && (
                <Button
                    className={styles['button-collapsed']}
                    type='text'
                    icon={isCollapsed ? <DownOutlined /> : <UpOutlined />}
                    onClick={collapseHandler}
                >
                    {isCollapsed
                        ? InviteConfig.BUTTON_COLLAPSED_SHOW
                        : InviteConfig.BUTTON_COLLAPSED_GOST}
                </Button>
            )}
        </div>
    );
}
