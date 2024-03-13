import { Button, Modal, Result } from 'antd';
import clsn from 'classnames';

import { useResultModal } from '../hooks/use-result-modal';
import { Extra, modalCofig } from '../config';

import { DataTestIdConfig } from '@shared/config';
import { STYLES } from '@shared/config/constants';

import styles from './result-modal.module.less';
// import { configButton, configDescription, configIconClose, configTitle } from '../hooks/config';

export function ResultModal() {
    const {
        description,
        isOpen,
        isAddTraining,
        isTraningList,
        // getTraningListAgayn,
        onClickAgayn,
        onClickClose,
        typeModal,
    } = useResultModal();

    return (
        <Modal
            data-test-id={DataTestIdConfig.MODAL_NO_REVIEW}
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
            {isTraningList || isAddTraining ? (
                <div>
                    {/* <div>{configTitle(modalCofig[typeModal.type].title)}</div>
                    <div>{configDescription(modalCofig[typeModal.type].desciption)}</div>
                    <div>
                        <Button onClick={onClickClose}>{configIconClose()}</Button>
                    </div>
                    <div>
                        <Button onClick={isAddTraining ? onClickClose : getTraningListAgayn}>
                            {configButton(modalCofig[typeModal.type].buttonTitle)}
                        </Button>
                    </div> */}
                </div>
            ) : (
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
            )}
        </Modal>
    );
}
