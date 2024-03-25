import {
    modalResultConfig,
    ModalTypeConfig,
    resultModalActions,
} from '@features/result-modal/@ex/profile';

export function resultSuccessFetch(type?: string) {
    if (type === ModalTypeConfig.SUCCESS_BUY_TARIFF) {
        return resultModalActions.setResultModal({
            isOpen: true,
            typeModal: {
                type: modalResultConfig[ModalTypeConfig.SUCCESS_BUY_TARIFF].type,
                status: modalResultConfig[ModalTypeConfig.SUCCESS_BUY_TARIFF].status,
            },
        });
    }

    return resultModalActions.setResultModal({
        isOpen: false,
        typeModal: {
            type: modalResultConfig[ModalTypeConfig.SUCCESS_UPDATE_USER].type,
            status: modalResultConfig[ModalTypeConfig.SUCCESS_UPDATE_USER].status,
        },
    });
}
