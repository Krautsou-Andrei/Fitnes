import { useCallback, useEffect, useRef } from 'react';
import { push } from 'redux-first-history';
import { Modal, ModalProps } from 'antd';

import { getTraningListThunk } from '@features/traning/@ex/result-modal';

import { resultModalActions, selectResultModal } from '../model/slice';
import { ModalTypeConfig, modalCofig, modalResultConfig } from '../config';
import { feedbackActions } from '@entities/feedbacks';

import { useAppDispatch, useAppMediaQuery, useAppSelector } from '@shared/hooks';
import { PathConfig } from '@shared/config';
import { showErrorForDevelop, splitString } from '@shared/lib';

type ModalErrorTraningList = {
    destroy: () => void;
    update: (configUpdate: ModalProps) => void;
};

export function useResultModal() {
    const { isQueryMD } = useAppMediaQuery();
    const { isOpen, typeModal = modalResultConfig[ModalTypeConfig.SUCCESS_ADD_FEEDBACK] } =
        useAppSelector(selectResultModal);
    const dispatch = useAppDispatch();

    const modalErrorTraningList = useRef<ModalErrorTraningList | null>(null);

    const isTraningList = typeModal.type === ModalTypeConfig.ERROR_GET_TRANING_LIST;

    const onClickClose = useCallback(() => {
        if (
            typeModal.type === ModalTypeConfig.ERROR_GET_FEEDBACK ||
            typeModal.type === ModalTypeConfig.ERROR_GET_TRANING
        ) {
            dispatch(resultModalActions.setResultModal({ isOpen: false, typeModal: undefined }));
            dispatch(push(PathConfig.HOME));
            return;
        }
        modalErrorTraningList.current?.destroy();
        dispatch(resultModalActions.setResultModal({ isOpen: false, typeModal: undefined }));
    }, [dispatch, typeModal.type]);

    const getTraningListAgayn = useCallback(() => {
        onClickClose();
        dispatch(getTraningListThunk()).catch((error: unknown) => {
            showErrorForDevelop('Get training list', error);
        });
    }, [dispatch, onClickClose]);

    useEffect(() => {
        if (isTraningList) {
            modalErrorTraningList.current = Modal.error({
                title: modalCofig[typeModal.type].title,
                okText: modalCofig[typeModal.type].buttonTitle,
                onCancel: onClickClose,
                mask: false,
                closable: true,
                centered: true,
                onOk: getTraningListAgayn,
            });

            return () => {
                if (modalErrorTraningList.current) {
                    modalErrorTraningList.current.destroy();
                }
            };
        }
    }, [getTraningListAgayn, isTraningList, onClickClose, typeModal.type]);

    const onClickAgayn = () => {
        onClickClose();

        dispatch(feedbackActions.setIsOpenModalNewFeedback(true));
    };

    let description;

    if (modalCofig[typeModal.type].desciption_mobile || modalCofig[typeModal.type].desciption) {
        description = splitString(
            isQueryMD
                ? modalCofig[typeModal.type].desciption_mobile || ''
                : modalCofig[typeModal.type].desciption || '',
        );
    }

    return {
        description,
        isOpen,
        isTraningList,
        onClickAgayn,
        onClickClose,
        typeModal,
        modalErrorTraningList,
    };
}
