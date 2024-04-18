import { Avatar, Button, Col, Modal, Row } from 'antd';
import { CheckCircleFilled, UserOutlined } from '@ant-design/icons';

import { usePalModal } from '../hooks';

import { InviteConfig } from '@features/traning/config';

import { Gap, STYLES, Size } from '@shared/config/constants';
import { DataTestIdConfig } from '@shared/config';

import styles from './pal-modal.module.less';

type PalModalProps = {
    isOpenPalModal: boolean;
    onClosePalModal: () => void;
};

export function PalModal({ isOpenPalModal, onClosePalModal }: PalModalProps) {
    const { state, functions } = usePalModal({ onCloseModal: onClosePalModal });

    return (
        <Modal
            data-test-id={DataTestIdConfig.PARTNER_MODAL}
            className={styles['pal-modal']}
            open={isOpenPalModal}
            centered={true}
            onCancel={onClosePalModal}
            footer={null}
            maskStyle={{
                backdropFilter: STYLES.BLURE,
                background: STYLES.BACKGROUND_BLURE,
            }}
        >
            <>
                <Row className={styles['pal-info']}>
                    <Col span={Gap.GAP_S} className={styles.avatar}>
                        <Avatar
                            size={Size.SIZE_8_XL}
                            alt={state.pal?.name}
                            src={state.pal?.imageSrc}
                            icon={!state.pal?.imageSrc && <UserOutlined />}
                        />
                        <span className={styles.name}>{state.pal?.name}</span>
                    </Col>
                    <Col className={styles.params}>
                        <Col className={styles['params-name']}>
                            <div>{InviteConfig.TYPE_TRAINING}</div>
                            <div>{InviteConfig.MIDLE_WEIGHT}</div>
                        </Col>
                        <Col className={styles['params-info']}>
                            <div>{state.pal?.trainingType}</div>
                            <div>
                                {state.pal?.avgWeightInWeek} {InviteConfig.MIDLE_WEIGHT_TITLE}
                            </div>
                        </Col>
                    </Col>
                </Row>
                <Row className={styles.controls}>
                    <Col span={Gap.GAP_S} className={styles.status}>
                        {InviteConfig.TRAINING_SUCCESS}
                        <CheckCircleFilled />
                    </Col>
                    <Col>
                        <Button
                            block
                            className={styles.button}
                            onClick={() => functions.handlerRejectTraining(state.pal?.inviteId)}
                        >
                            {InviteConfig.REJECT_TRAINING}
                        </Button>
                    </Col>
                </Row>
            </>
        </Modal>
    );
}
