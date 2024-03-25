import {
    modalResultConfig,
    ModalTypeConfig,
    resultModalActions,
} from '@features/result-modal/@ex/feedbacks';

export function resultErrorFetch() {
    return resultModalActions.setResultModal({
        isOpen: false,
        typeModal: {
            type: modalResultConfig[ModalTypeConfig.ERROR_UPDATE_USER].type,
            status: modalResultConfig[ModalTypeConfig.ERROR_UPDATE_USER].status,
        },
    });
}
