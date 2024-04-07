import { Avatar, Button, Col, Modal, Row } from 'antd';

import { CheckCircleFilled, UserOutlined } from '@ant-design/icons';

import { rejectInvitieThunk } from '@features/traning/model/reject-invite';
import { InviteConfig, StatusConfig } from '@features/traning/config';

import { selectPal, trainingActions } from '@entities/training';

import { Gap, STYLES, Size } from '@shared/config/constants';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';
import { DataTestIdConfig } from '@shared/config';

import styles from './pal-modal.module.less';

type PalModalProps = {
    isOpenPalModal: boolean;
    onClosePalModal: () => void;
};

export function PalModal({ isOpenPalModal, onClosePalModal }: PalModalProps) {
    const dispatch = useAppDispatch();

    const pal = useAppSelector(selectPal);

    const handlerRejectTraining = (id: string | undefined) => {
        if (id) {
            dispatch(rejectInvitieThunk({ id, status: StatusConfig.REJECTED }))
                .unwrap()
                .then(() => dispatch(trainingActions.removeUserJointTraining({ id: id })))
                .catch((error: unknown) => {
                    showErrorForDevelop('Get training pals', error);
                });
        }
    };
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
                            alt={pal?.name}
                            src={pal?.imageSrc}
                            icon={!pal?.imageSrc && <UserOutlined />}
                        />
                        <span className={styles.name}>{pal?.name}</span>
                    </Col>
                    <Col className={styles.params}>
                        <Col className={styles['params-name']}>
                            <div>{InviteConfig.TYPE_TRAINING}</div>
                            <div>{InviteConfig.MIDLE_WEIGHT}</div>
                        </Col>
                        <Col className={styles['params-info']}>
                            <div>{pal?.trainingType}</div>
                            <div>
                                {pal?.avgWeightInWeek} {InviteConfig.MIDLE_WEIGHT_TITLE}
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
                            onClick={() => handlerRejectTraining(pal?.inviteId)}
                        >
                            {InviteConfig.REJECT_TRAINING}
                        </Button>
                    </Col>
                </Row>
            </>
        </Modal>
    );
}
