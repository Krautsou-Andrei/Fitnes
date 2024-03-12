import React, { useCallback, useEffect, useRef } from 'react';
import { push } from 'redux-first-history';
import { Modal, ModalProps } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

import { configButton, configDescription, configIconClose, configTitle } from './config';
import { ModalTypeConfig, modalCofig, modalResultConfig } from '../config';
import { resultModalActions, selectResultModal } from '../model/slice';

import { getTraningListThunk } from '@features/traning/@ex/result-modal';

import { feedbackActions } from '@entities/feedbacks';

import { useAppDispatch, useAppMediaQuery, useAppSelector } from '@shared/hooks';
import { ConstantsMediaQuery, PathConfig } from '@shared/config';
import { showErrorForDevelop, splitString } from '@shared/lib';

type modalErrorTraning = {
    destroy: () => void;
    update: (configUpdate: ModalProps) => void;
};

export function useResultModal() {
    const { isQueryMD } = useAppMediaQuery();
    const { isOpen, typeModal = modalResultConfig[ModalTypeConfig.SUCCESS_ADD_FEEDBACK] } =
        useAppSelector(selectResultModal);
    const dispatch = useAppDispatch();

    const modalErrorTraning = useRef<modalErrorTraning | null>(null);

    const isAddTraining = typeModal.type === ModalTypeConfig.ERROR_ADD_TRAINING;
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
        modalErrorTraning.current?.destroy();
        dispatch(resultModalActions.setResultModal({ isOpen: false, typeModal: undefined }));
    }, [dispatch, typeModal.type]);

    const getTraningListAgayn = useCallback(() => {
        onClickClose();
        dispatch(getTraningListThunk()).catch((error: unknown) => {
            showErrorForDevelop('Get training list', error);
        });
    }, [dispatch, onClickClose]);

    useEffect(() => {
        if (isAddTraining) {
            modalErrorTraning.current = Modal.error({
                title: modalCofig[typeModal.type].title,
                content: React.createElement('div', null, modalCofig[typeModal.type].desciption),
                okText: modalCofig[typeModal.type].buttonTitle,
                onOk: onClickClose,
                mask: false,
                centered: true,
            });

            return () => {
                if (modalErrorTraning.current) {
                    modalErrorTraning.current.destroy();
                }
            };
        }
    }, [isAddTraining, onClickClose, typeModal.type]);

    useEffect(() => {
        if (isTraningList) {
            modalErrorTraning.current = Modal.error({
                title: configTitle(modalCofig[typeModal.type].title),
                content: React.createElement(
                    'div',
                    null,
                    configDescription(modalCofig[typeModal.type].desciption),
                ),
                okText: configButton(modalCofig[typeModal.type].buttonTitle),
                onCancel: onClickClose,
                mask: false,
                closable: true,
                centered: true,
                closeIcon: configIconClose(),
                onOk: getTraningListAgayn,
                icon: React.createElement(CloseCircleOutlined, {
                    style: { color: `${ConstantsMediaQuery.ICON_COLOR_ERROR_LIST}` },
                }),
            });

            return () => {
                if (modalErrorTraning.current) {
                    modalErrorTraning.current.destroy();
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
        isAddTraining,
        isTraningList,
        onClickAgayn,
        onClickClose,
        typeModal,
        modalErrorTraning,
    };
}
