import {
    modalResultConfig,
    ModalTypeConfig,
    resultModalActions,
} from '@features/result-modal/@ex/traning';

export function resultSuccessFetch(type?: string) {
    if (type === ModalTypeConfig.SUCCESS_UPDATE_WORKOUT) {
        return resultModalActions.setResultModal({
            isOpen: false,
            typeModal: {
                type: modalResultConfig[ModalTypeConfig.SUCCESS_UPDATE_WORKOUT].type,
                status: modalResultConfig[ModalTypeConfig.SUCCESS_UPDATE_WORKOUT].status,
            },
        });
    }

    return resultModalActions.setResultModal({
        isOpen: false,
        typeModal: {
            type: modalResultConfig[ModalTypeConfig.SUCCESS_CREATE_WORKOUT].type,
            status: modalResultConfig[ModalTypeConfig.SUCCESS_CREATE_WORKOUT].status,
        },
    });
}
