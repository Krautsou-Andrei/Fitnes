import { Button, Card, Space, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import type { Invite } from '@entities/invite';

import { AppBadge } from '@shared/ui';
import { formatDate, getPeriodFindNumber } from '@shared/lib';
import { DateFormatConfig } from '@shared/config';

import styles from './invite-training-card.module.less';

const { Text } = Typography;

type InviteTrainingCardProps = {
    selectedInvite: Invite;
    onClose: VoidFunction;
};

export function InviteTrainingCard({ selectedInvite, onClose }: InviteTrainingCardProps) {
    return (
        <Card className={styles['invite-card']}>
            <div className={styles['card-wrapper']}>
                <div className={styles['card-title-wrapper']}>
                    <Space>
                        <AppBadge name={selectedInvite.training.training.name} />
                        <div>{selectedInvite.training.training.name}</div>
                    </Space>
                    <Button type='text' size='small' icon={<CloseOutlined />} onClick={onClose} />
                </div>
                <div className={styles['card-content']}>
                    {selectedInvite.training.training.parameters?.period && (
                        <div className={styles['content-text']}>
                            <Text style={{ fontSize: '16px' }}>
                                {getPeriodFindNumber(
                                    selectedInvite.training.training.parameters?.period,
                                )}
                            </Text>
                            <Text>
                                {formatDate(
                                    selectedInvite.training.date,
                                    DateFormatConfig.FORMAT_DD_MN_YYYY_DOT,
                                )}
                            </Text>
                        </div>
                    )}

                    {selectedInvite?.training.training.exercises?.map((exercise) => (
                        <div className={styles['content-text']} style={{ marginTop: '8px' }}>
                            <Text type='secondary'>{exercise.name}</Text>
                            <Text className={styles['content-period']}>
                                {`${exercise.approaches} x (${exercise.replays})`}
                            </Text>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}
