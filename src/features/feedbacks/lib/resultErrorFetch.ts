import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { modalResultConfig, ModalTypeConfig } from '@features/result-modal/@ex/feedbacks';

import { feedbackActions } from '@entities/feedbacks';

import { StatusError } from '@shared/api';

export function resultErrorFetch(error: FetchBaseQueryError) {
    if (error.status !== StatusError.ERROR_403) {
        return feedbackActions.setResultModal({
            isOpen: true,
            typeModal: {
                type: modalResultConfig[ModalTypeConfig.ERROR_GET_FEEDBACK].type,
                status: modalResultConfig[ModalTypeConfig.ERROR_GET_FEEDBACK].status,
            },
        });
    }

    return feedbackActions.setResultModal({ isOpen: false });
}
