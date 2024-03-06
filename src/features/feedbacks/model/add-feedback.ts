import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    modalResultConfig,
    ModalTypeConfig,
    resultModalActions,
} from '@features/result-modal/@ex/feedbacks';

import { sessionActions } from '@entities/session';
import { RequesFeedbackBody, feedbackApi } from '@entities/feedbacks';

import { isFetchBaseQueryError } from '@shared/api';
import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';

export const AddFeedbackThunk = createAsyncThunk<void, RequesFeedbackBody, { state: RootState }>(
    EventApiConfig.FEEDBACK_ADD,

    async (body: RequesFeedbackBody, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            await dispatch(feedbackApi.endpoints.addFeedback.initiate(body)).unwrap();
            dispatch(
                resultModalActions.setResultModal({
                    isOpen: true,
                    typeModal: {
                        type: modalResultConfig[ModalTypeConfig.SUCCESS_ADD_FEEDBACK].type,
                        status: modalResultConfig[ModalTypeConfig.SUCCESS_ADD_FEEDBACK].status,
                    },
                }),
            );
        } catch (error: unknown | undefined) {
            if (isFetchBaseQueryError(error)) {
                dispatch(
                    resultModalActions.setResultModal({
                        isOpen: true,
                        typeModal: {
                            type: modalResultConfig[ModalTypeConfig.ERROR_ADD_FEEDBACK].type,
                            status: modalResultConfig[ModalTypeConfig.ERROR_ADD_FEEDBACK].status,
                        },
                    }),
                );
            }

            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
