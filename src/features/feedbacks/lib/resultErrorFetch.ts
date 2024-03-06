import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';

import {
    modalResultConfig,
    ModalTypeConfig,
    resultModalActions,
} from '@features/result-modal/@ex/feedbacks';

import { StatusError } from '@shared/api';

export function resultErrorFetch(error: FetchBaseQueryError) {
    if (error.status !== StatusError.ERROR_403) {
        return resultModalActions.setResultModal({
            isOpen: true,
            typeModal: {
                type: modalResultConfig[ModalTypeConfig.ERROR_GET_FEEDBACK].type,
                status: modalResultConfig[ModalTypeConfig.ERROR_GET_FEEDBACK].status,
            },
        });
    }

    return resultModalActions.setResultModal({ isOpen: false });
}
