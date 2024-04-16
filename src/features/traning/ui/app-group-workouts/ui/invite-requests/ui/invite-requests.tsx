import { Avatar, Button, Typography } from 'antd';
import { DownOutlined, UpOutlined, UserOutlined } from '@ant-design/icons';

import { useInviteRequests } from '../hooks';
import { InviteTrainingCard } from '../../invite-training-card';

import { InviteConfig, TypeTrainingsInviteConfig } from '@features/traning/config';

import { Size } from '@shared/config/constants';
import { formatDate } from '@shared/lib';
import { DateFormatConfig } from '@shared/config';

import styles from './invite-requests.module.less';

const { Text } = Typography;

export function InviteRequests() {
    const { state, functions } = useInviteRequests();

    if (!state.invities.length) {
        return null;
    }

    return (
        <div className={styles['ivite-request']}>
            <Text className={styles['new-sends']} type='secondary'>
                {InviteConfig.NEW_SEND_TITLE}({state.invities.length})
            </Text>
            {state.invitiesRender.map((item) => (
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
                            onClick={() => functions.handlerOpenInviteTrainingCard(item.id)}
                        >
                            {InviteConfig.SHOW_DATAILS_TRAINING}
                        </Button>
                        {state.openInviteTrainingCard && state.selectInvite === item.id && (
                            <InviteTrainingCard
                                selectedInvite={item}
                                onClose={() => functions.setOpenInviteTrainingCard(false)}
                            />
                        )}
                    </div>
                    <div className={styles.buttons}>
                        <Button
                            block
                            type='primary'
                            onClick={() => functions.acceptInviteHandler(item.id)}
                        >
                            {InviteConfig.TRAINING_JOINT}
                        </Button>
                        <Button block onClick={() => functions.rejectInviteHandler(item.id)}>
                            {InviteConfig.REJECT_TRAINING}
                        </Button>
                    </div>
                </div>
            ))}

            {state.invities.length > 1 && (
                <Button
                    className={styles['button-collapsed']}
                    type='text'
                    icon={state.isCollapsed ? <DownOutlined /> : <UpOutlined />}
                    onClick={functions.collapseHandler}
                >
                    {state.isCollapsed
                        ? InviteConfig.BUTTON_COLLAPSED_SHOW
                        : InviteConfig.BUTTON_COLLAPSED_GOST}
                </Button>
            )}
        </div>
    );
}
