import React, { useCallback, useLayoutEffect, useRef } from 'react';
import { push } from 'redux-first-history';
import { Modal, ModalProps, notification } from 'antd';
import { CheckCircleFilled, CloseCircleOutlined } from '@ant-design/icons';

import { configButton, configDescription, configIconClose, configTitle } from './config';
import { ModalTypeConfig, modalCofig, modalResultConfig } from '../config';
import { resultModalActions, selectResultModal } from '../model/slice';

import { getTraningListThunk } from '@features/traning/@ex/result-modal';

import { feedbackActions } from '@entities/feedbacks';

import { useAppDispatch, useAppMediaQuery, useAppSelector } from '@shared/hooks';
import { PathConfig } from '@shared/config';
import { showErrorForDevelop, splitString } from '@shared/lib';
import { STYLES } from '@shared/config/constants';

import styles from '../ui/result-modal.module.less';

type modalErrorTraning = {
    destroy: () => void;
    update: (configUpdate: ModalProps) => void;
};

export function useResultModal() {
    const { isQueryMD } = useAppMediaQuery();
    const { isOpen, typeModal = modalResultConfig[ModalTypeConfig.SUCCESS_ADD_FEEDBACK] } =
        useAppSelector(selectResultModal);
    const dispatch = useAppDispatch();
    const [api, contextHolder] = notification.useNotification();

    const notificationChange = useRef<boolean>(false);

    const modalErrorTraning = useRef<modalErrorTraning | null>(null);

    const isAddTraining = typeModal.type === ModalTypeConfig.ERROR_ADD_TRAINING;
    const isTraningList = typeModal.type === ModalTypeConfig.ERROR_GET_TRANING_LIST;
    const isImage = typeModal.type === ModalTypeConfig.ERROR_ADD_IMAGE;
    const isUpdateUser = typeModal.type === ModalTypeConfig.ERROR_UPDATE_USER;
    const isSccessUpdateUser = typeModal.type === ModalTypeConfig.SUCCESS_UPDATE_USER;

    const onClickClose = useCallback(() => {
        if (
            typeModal.type === ModalTypeConfig.ERROR_GET_FEEDBACK ||
            typeModal.type === ModalTypeConfig.ERROR_GET_TRANING
        ) {
            dispatch(resultModalActions.setResultModal({ isOpen: false, typeModal: undefined }));
            dispatch(push(PathConfig.HOME));
            return;
        }

        if (isSccessUpdateUser) {
            notificationChange.current = false;
        }

        modalErrorTraning.current?.destroy();
        dispatch(resultModalActions.setResultModal({ isOpen: false, typeModal: undefined }));
    }, [dispatch, isSccessUpdateUser, typeModal.type]);

    const openNotificationWithIcon = useCallback(
        (type: 'success') => {
            api[type]({
                className: styles['success-update-user'],
                icon: React.createElement(CheckCircleFilled, {
                    style: {
                        color: `${STYLES.ICON_COLOR_SUCCESS_UPDATE_USER}`,
                        width: `${STYLES.SIZE_ICON_UPLOAD_USER}`,
                        height: `${STYLES.SIZE_ICON_UPLOAD_USER}`,
                    },
                }),
                duration: 0,
                message: modalCofig[typeModal.type].title,
                placement: 'bottom',
                onClose: onClickClose,
            });
            notificationChange.current = true;
        },
        [api, onClickClose, typeModal.type],
    );

    const getTraningListAgayn = useCallback(() => {
        onClickClose();
        dispatch(getTraningListThunk()).catch((error: unknown) => {
            showErrorForDevelop('Get training list', error);
        });
    }, [dispatch, onClickClose]);

    useLayoutEffect(() => {
        if (isAddTraining) {
            modalErrorTraning.current = Modal.error({
                title: configTitle(modalCofig[typeModal.type].title),
                content: React.createElement(
                    'div',
                    null,
                    configDescription(modalCofig[typeModal.type].desciption),
                ),
                maskStyle: {
                    backdropFilter: STYLES.BLURE,
                    background: STYLES.BACKGROUND_BLURE,
                },
                okText: configButton(modalCofig[typeModal.type].buttonTitle),
                closeIcon: configIconClose(),
                onOk: onClickClose,
                centered: true,
            });

            return () => {
                if (modalErrorTraning.current) {
                    modalErrorTraning.current.destroy();
                }
            };
        }
    }, [isAddTraining, onClickClose, typeModal.type]);

    useLayoutEffect(() => {
        if (isTraningList) {
            modalErrorTraning.current = Modal.error({
                className: styles['error-get-training-list'],
                title: configTitle(modalCofig[typeModal.type].title),
                content: React.createElement(
                    'div',
                    null,
                    configDescription(modalCofig[typeModal.type].desciption),
                ),
                maskStyle: {
                    backdropFilter: STYLES.BLURE,
                    background: STYLES.BACKGROUND_BLURE,
                },
                okText: configButton(modalCofig[typeModal.type].buttonTitle),
                onCancel: onClickClose,
                closable: true,
                centered: true,
                closeIcon: configIconClose(),
                onOk: getTraningListAgayn,
                icon: React.createElement(CloseCircleOutlined, {
                    style: { color: `${STYLES.ICON_COLOR_ERROR_LIST}` },
                }),
            });

            return () => {
                if (modalErrorTraning.current) {
                    modalErrorTraning.current.destroy();
                }
            };
        }
    }, [getTraningListAgayn, isTraningList, onClickClose, typeModal.type]);

    useLayoutEffect(() => {
        if (isImage || isUpdateUser) {
            modalErrorTraning.current = Modal.error({
                title: configTitle(modalCofig[typeModal.type].title),
                content: React.createElement(
                    'div',
                    null,
                    configDescription(modalCofig[typeModal.type].desciption),
                ),
                maskStyle: {
                    backdropFilter: STYLES.BLURE,
                    background: STYLES.BACKGROUND_BLURE,
                },
                okText: configButton(modalCofig[typeModal.type].buttonTitle),
                onCancel: onClickClose,
                centered: true,
            });

            return () => {
                if (modalErrorTraning.current) {
                    modalErrorTraning.current.destroy();
                }
            };
        }
    }, [isImage, isUpdateUser, onClickClose, typeModal.type]);

    const onClickAgayn = () => {
        onClickClose();

        dispatch(feedbackActions.setIsOpenModalNewFeedback(true));
    };

    useLayoutEffect(() => {
        if (isSccessUpdateUser) {
            if (!notificationChange.current) openNotificationWithIcon('success');
        }
    }, [isSccessUpdateUser, openNotificationWithIcon]);

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
        getTraningListAgayn,
        onClickAgayn,
        onClickClose,
        typeModal,
        modalErrorTraning,
        contextHolder,
    };
}
