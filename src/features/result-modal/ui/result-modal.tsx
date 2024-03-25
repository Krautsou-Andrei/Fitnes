import { Modal, Result } from 'antd';
import clsn from 'classnames';

import { useResultModal } from '../hooks/use-result-modal';
import { Extra, modalCofig } from '../config';

import { STYLES } from '@shared/config/constants';

import styles from './result-modal.module.less';

export function ResultModal() {
    const {
        dataTestID,
        description,
        isOpen,
        isAddTraining,
        isTraningList,
        onClickAgayn,
        onClickClose,
        typeModal,
    } = useResultModal();

    return (
        <Modal
            data-test-id={dataTestID}
            className={clsn(styles[`${typeModal.type}`], {
                [styles['modal-error-training']]: isTraningList || isAddTraining,
            })}
            open={isOpen}
            maskStyle={{
                backdropFilter: STYLES.BLURE,
                background: STYLES.BACKGROUND_BLURE,
            }}
            centered={true}
            footer={null}
            closable={false}
            transitionName=''
        >
            <Result
                status={typeModal.status}
                title={modalCofig[typeModal.type].title}
                subTitle={description}
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
