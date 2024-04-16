import clsn from 'classnames';
import { Avatar, Button, Card, Col, Row, Tooltip } from 'antd';
import { CheckCircleTwoTone, InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

import { usePalCard } from '../hooks';

import {
    InviteConfig,
    PalStatusConfig,
    StatusConfig,
    WorkoutsConfig,
} from '@features/traning/config';

import { type Pal } from '@entities/training';

import { STYLES, Size } from '@shared/config/constants';
import { DataTestIdConfig } from '@shared/config';

import styles from './pal-card.module.less';

type PalCardProps = {
    pal: Pal;
    index: number;
    searchValue?: string;
    onOpenDrawer?: () => void;
};

export function PalCard({ pal, index, searchValue, onOpenDrawer }: PalCardProps) {
    const { state, functions } = usePalCard({
        pal: pal,
        searchValue: searchValue,
        onOpenDrawer: onOpenDrawer,
        classNameHighlight: styles.highlight,
    });

    return (
        <Card
            data-test-id={`${DataTestIdConfig.JOINT_TRAINING_CARDS}${index}`}
            key={pal.id}
            className={clsn(styles['card-pal'], { [styles.pal]: onOpenDrawer })}
            onClick={functions.onSelectPal}
        >
            <div className={styles['pal-wrapper']}>
                <Row className={styles['user-info']}>
                    <Col>
                        <Avatar
                            size={Size.SIZE_8_XL}
                            alt={pal.name}
                            src={pal.imageSrc}
                            icon={!pal.imageSrc && <UserOutlined />}
                        />
                    </Col>
                    <Col className={styles.name}>
                        <div>{functions.name(pal.name)} </div>
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
                            type='primary'
                            className={styles.button}
                            disabled={
                                pal.status === StatusConfig.REJECTED ||
                                pal.status === StatusConfig.PENDING ||
                                state.partners.length >= WorkoutsConfig.MAX_PARTNERS
                            }
                            onClick={functions.handlerButtonPal}
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
