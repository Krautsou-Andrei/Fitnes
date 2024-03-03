import { push } from 'redux-first-history';

import { ModalTypeConfig, modalResultConfig } from '../config';
import { feedbackActions, selectResultModal } from '@entities/feedbacks';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { PathConfig } from '@shared/config';

export function useResultModal() {
    const { isOpen, typeModal = modalResultConfig[ModalTypeConfig.SUCCESS_ADD_FEEDBACK] } =
        useAppSelector(selectResultModal);
    const dispatch = useAppDispatch();

    const onClickClose = () => {
        if (typeModal.type === ModalTypeConfig.ERROR_GET_FEEDBACK) {
            dispatch(feedbackActions.setResultModal({ isOpen: false, typeModal: undefined }));
            dispatch(push(PathConfig.HOME));
            return;
        }
        dispatch(feedbackActions.setResultModal({ isOpen: false, typeModal: undefined }));
    };

    const onClickAgayn = () => {
        onClickClose();
        dispatch(feedbackActions.setIsOpenModalNewFeedback(true));
    };

    return { isOpen, onClickAgayn, onClickClose, typeModal };
}
