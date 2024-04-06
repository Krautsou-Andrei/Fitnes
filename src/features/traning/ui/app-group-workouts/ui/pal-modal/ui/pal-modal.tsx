import { Avatar, Button, Col, Modal, Row } from 'antd';

import { CheckCircleTwoTone, UserOutlined } from '@ant-design/icons';

import { rejectInvitieThunk } from '@features/traning/model/reject-invite';
import { InviteConfig, StatusConfig } from '@features/traning/config';

import { selectPal, useLazyGetTrainingPalsQuery } from '@entities/training';

import { Gap, STYLES, Size } from '@shared/config/constants';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';

import styles from './pal-modal.module.less';
import { DataTestIdConfig } from '@shared/config';

type PalModalProps = {
    isOpenPalModal: boolean;
    onClosePalModal: () => void;
};

export function PalModal({ isOpenPalModal, onClosePalModal }: PalModalProps) {
    const dispatch = useAppDispatch();
    const [getTrainingPal] = useLazyGetTrainingPalsQuery();
    const pal = useAppSelector(selectPal);

    const handlerRejectTraining = (id: string | undefined) => {
        if (id) {
            dispatch(rejectInvitieThunk({ id, status: StatusConfig.REJECTED }))
                .unwrap()
                .then(() => getTrainingPal())
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
                    <Col span={Gap.GAP_S}>
                        <Avatar
                            size={Size.SIZE_8_XL}
                            alt={pal?.name}
                            src={pal?.imageSrc}
                            icon={!pal?.imageSrc && <UserOutlined />}
                        />
                        <span>{pal?.name}</span>
                    </Col>
                    <Col
                        sm={{ span: Gap.GAP_S }}
                        xs={{ span: Gap.GAP_XL }}
                        className={styles.params}
                    >
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
                    <Col
                        sm={{ span: Gap.GAP_S }}
                        xs={{ span: Gap.GAP_XL }}
                        className={styles.status}
                    >
                        {InviteConfig.TRAINING_SUCCESS}
                        <CheckCircleTwoTone twoToneColor={STYLES.ICON_COLOR_SUCCESS_UPDATE_USER} />
                    </Col>
                    <Col sm={{ span: Gap.GAP_S }} xs={{ span: Gap.GAP_XL }}>
                        <Button
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
