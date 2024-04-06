import { useCallback } from 'react';
import { Avatar, Button, Card, Col, Row, Tooltip } from 'antd';
import { CheckCircleTwoTone, InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

import { InviteConfig, PalStatusConfig, StatusConfig } from '@features/traning/config';
import { rejectInvitieThunk } from '@features/traning/model/reject-invite';

import {
    type Pal,
    trainingActions,
    useLazyGetUserJointTrainingListQuery,
} from '@entities/training';

import { AppHeighlightText } from '@shared/ui';
import { useAppDispatch } from '@shared/hooks';
import { Gap, STYLES, Size } from '@shared/config/constants';
import { showErrorForDevelop } from '@shared/lib';
import { DataTestIdConfig } from '@shared/config';

import styles from './pal-card.module.less';

type PalCardProps = {
    pal: Pal;
    index: number;
    searchValue?: string;
    onOpenDrawer?: () => void;
};

export function PalCard({ pal, index, searchValue, onOpenDrawer }: PalCardProps) {
    const dispatch = useAppDispatch();
    const [getJointTraining] = useLazyGetUserJointTrainingListQuery();

    const name = useCallback(
        (name: string) => (
            <AppHeighlightText
                searchParams={searchValue}
                text={name}
                classNames={styles.heighlight}
            />
        ),
        [searchValue],
    );

    const onSelectPal = () => {
        dispatch(trainingActions.setSelectPal(pal));
    };

    const handlerOpenDrawer = () => {
        dispatch(trainingActions.setSelectPal(pal));
        dispatch(trainingActions.setCreateTrainingName(pal.trainingType));
        if (onOpenDrawer) {
            onOpenDrawer();
        }
    };

    const handlerRejectTraining = (id: string) => {
        dispatch(rejectInvitieThunk({ id, status: StatusConfig.REJECTED }))
            .unwrap()
            .then(() => getJointTraining())
            .catch((error: unknown) => {
                showErrorForDevelop('Get training pals', error);
            });
    };
    const handlerButtonPal = () => {
        pal.status === null ? handlerOpenDrawer() : handlerRejectTraining(pal.inviteId);
    };

    return (
        <Card
            data-test-id={`${DataTestIdConfig.JOINT_TRAINING_CARDS}${index}`}
            key={pal.id}
            className={styles['card-pal']}
            onClick={onSelectPal}
        >
            <div className={styles['pal-wrapper']}>
                <Row className={styles.userInfo}>
                    <Col>
                        <Avatar
                            size={Size.SIZE_8_XL}
                            alt={pal.name}
                            src={pal.imageSrc}
                            icon={!pal.imageSrc && <UserOutlined />}
                        />
                    </Col>
                    <Col style={{ marginLeft: `${Gap.GAP_XS}px` }}>
                        <div className={styles.name}>{name(pal.name)} </div>
                    </Col>
                </Row>
                <Row className={styles['pal-params']}>
                    <Col className={styles['params-title']}>
                        <div>{InviteConfig.TYPE_TRAINING}</div>
                        <div>{InviteConfig.MIDLE_WEIGHT}</div>
                    </Col>
                    <Col className={styles['params-info']}>
                        <div>{pal.trainingType}</div>
                        <div>
                            {pal.avgWeightInWeek} {InviteConfig.MIDLE_WEIGHT_TITLE}
                        </div>
                    </Col>
                </Row>
                {onOpenDrawer && (
                    <>
                        <Button
                            block={true}
                            size='middle'
                            type='primary'
                            disabled={
                                pal.status === StatusConfig.REJECTED ||
                                pal.status === StatusConfig.PENDING
                            }
                            onClick={handlerButtonPal}
                            style={{ marginTop: `${Gap.GAP_M}px` }}
                        >
                            {pal.status === StatusConfig.ACCEPTED
                                ? InviteConfig.REJECT_TRAINING
                                : InviteConfig.ADD_TRAINING}
                        </Button>
                        {pal.status ? (
                            <div className={styles.status}>
                                {PalStatusConfig[pal.status as keyof typeof PalStatusConfig]}
                                {pal.status === StatusConfig.REJECTED && (
                                    <Tooltip
                                        className={styles.tooltip}
                                        placement='topRight'
                                        title={InviteConfig.TOOLTIP_TITLE}
                                        color={STYLES.BACKGROUND_TOOLTIP}
                                        overlayStyle={{ width: STYLES.WIDTH_TOOLTIP }}
                                    >
                                        <InfoCircleOutlined />
                                    </Tooltip>
                                )}
                                {pal.status === StatusConfig.ACCEPTED && (
                                    <CheckCircleTwoTone
                                        twoToneColor={STYLES.ICON_COLOR_SUCCESS_UPDATE_USER}
                                    />
                                )}
                            </div>
                        ) : (
                            <div className={styles.status}>&nbsp;</div>
                        )}
                    </>
                )}
            </div>
        </Card>
    );
}
