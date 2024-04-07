import { ModalTypeConfig, modalCofig, modalResultConfig } from '@features/result-modal/config';
import { AppPortal } from '@shared/ui';
import { Alert } from 'antd';

import { resultModalActions, selectResultModal } from '@features/result-modal/model/slice';
import { useAppDispatch, useAppSelector } from '@shared/hooks';

import styles from './app-alert.module.less';
import { DataTestIdConfig } from '@shared/config';

type AlertType = 'success' | 'error' | 'info' | 'warning' | undefined;

export function AppAlert() {
    const dispatch = useAppDispatch();
    const { typeModal = modalResultConfig[ModalTypeConfig.SUCCESS_ADD_FEEDBACK] } =
        useAppSelector(selectResultModal);

    if (
        typeModal.type !== ModalTypeConfig.SUCCESS_UPDATE_USER &&
        typeModal.type !== ModalTypeConfig.SUCCESS_CREATE_WORKOUT &&
        typeModal.type !== ModalTypeConfig.SUCCESS_UPDATE_WORKOUT
    ) {
        return;
    }

    const onClickClose = () => {
        dispatch(resultModalActions.setResultModal({ isOpen: false, typeModal: undefined }));
    };

    const testId = () => {
        if (
            typeModal.type === ModalTypeConfig.SUCCESS_CREATE_WORKOUT ||
            typeModal.type === ModalTypeConfig.SUCCESS_UPDATE_WORKOUT
        ) {
            return DataTestIdConfig.CREATE_TRAINING_SUCCESS_ALERT;
        }

        return DataTestIdConfig.ALERT;
    };

    return (
        <AppPortal>
            <Alert
                data-test-id={testId()}
                className={styles['alert-success-update-user']}
                message={modalCofig[typeModal.type].title}
                type={typeModal.status as AlertType}
                showIcon={true}
                closable={true}
                onClose={onClickClose}
            />
        </AppPortal>
    );
}
