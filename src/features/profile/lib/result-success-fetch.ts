import {
    modalResultConfig,
    ModalTypeConfig,
    resultModalActions,
} from '@features/result-modal/@ex/feedbacks';

export function resultSuccessFetch() {
    return resultModalActions.setResultModal({
        isOpen: false,
        typeModal: {
            type: modalResultConfig[ModalTypeConfig.SUCCESS_UPDATE_USER].type,
            status: modalResultConfig[ModalTypeConfig.SUCCESS_UPDATE_USER].status,
        },
    });
}
