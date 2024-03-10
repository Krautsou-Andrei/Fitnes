import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';

import {
    modalResultConfig,
    ModalTypeConfig,
    resultModalActions,
} from '@features/result-modal/@ex/feedbacks';

import { StatusError } from '@shared/api';
import { EventApiConfig } from '@shared/config';

export function resultErrorFetch(error: FetchBaseQueryError, type?: string) {
    if (error.status !== StatusError.ERROR_403) {
        if (type === EventApiConfig.TRAINING_ADD) {
            return resultModalActions.setResultModal({
                isOpen: true,
                typeModal: {
                    type: modalResultConfig[ModalTypeConfig.ERROR_ADD_TRAINING].type,
                    status: modalResultConfig[ModalTypeConfig.ERROR_ADD_TRAINING].status,
                },
            });
        }

        if (type === EventApiConfig.TRAINING_GET_LIST_NAME) {
            return resultModalActions.setResultModal({
                isOpen: true,
                typeModal: {
                    type: modalResultConfig[ModalTypeConfig.ERROR_GET_TRANING_LIST].type,
                    status: modalResultConfig[ModalTypeConfig.ERROR_GET_TRANING_LIST].status,
                },
            });
        }

        return resultModalActions.setResultModal({
            isOpen: true,
            typeModal: {
                type: modalResultConfig[ModalTypeConfig.ERROR_GET_TRANING].type,
                status: modalResultConfig[ModalTypeConfig.ERROR_GET_TRANING].status,
            },
        });
    }

    return resultModalActions.setResultModal({ isOpen: false });
}
