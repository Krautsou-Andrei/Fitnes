import { Modal, Result } from 'antd';

import { useResultModal } from '../hooks/use-result-modal';
import { Extra, modalCofig } from '../config';

import { STYLES } from '@shared/config/constants';

import styles from './result-modal.module.less';

export function ResultModal() {
    const { isOpen, onClickAgayn, onClickClose, typeModal } = useResultModal();

    return (
        <Modal
            className={styles[`${typeModal.type}`]}
            open={isOpen}
            maskStyle={{ backdropFilter: STYLES.BLURE, background: STYLES.BACKGROUND_BLURE }}
            centered={true}
            footer={null}
            closable={false}
        >
            <Result
                status={typeModal.status}
                title={modalCofig[typeModal.type].title}
                subTitle={modalCofig[typeModal.type].desciption}
                extra={
                    <Extra
                        type={typeModal.type}
                        className={styles.button}
                        title={modalCofig[typeModal.type].buttonTitle}
                        titleClose={modalCofig[typeModal.type].buttonCloseTitle}
                        onClick={onClickAgayn}
                        onClickClose={onClickClose}
                    />
                }
            />
        </Modal>
    );
}
