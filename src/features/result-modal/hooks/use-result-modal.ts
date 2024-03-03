import { push } from 'redux-first-history';

import { ModalTypeConfig, modalCofig, modalResultConfig } from '../config';
import { feedbackActions, selectResultModal } from '@entities/feedbacks';

import { useAppDispatch, useAppMediaQuery, useAppSelector } from '@shared/hooks';
import { PathConfig } from '@shared/config';
import { splitString } from '@shared/lib';

export function useResultModal() {
    const { isQueryMD } = useAppMediaQuery();
    const { isOpen, typeModal = modalResultConfig[ModalTypeConfig.ERROR_GET_FEEDBACK] } =
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

    const descriptionModal = splitString(
        isQueryMD
            ? modalCofig[typeModal.type].desciption_mobile || ''
            : modalCofig[typeModal.type].desciption || '',
    );

    return { descriptionModal, isOpen, onClickAgayn, onClickClose, typeModal };
}
