import React, { useCallback, useLayoutEffect, useRef } from 'react';
import { push } from 'redux-first-history';
import { Modal, ModalProps } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

import { configButton, configDescription, configIconClose, configTitle } from './config';
import { ModalTypeConfig, modalCofig, modalResultConfig } from '../config';
import { resultModalActions, selectResultModal } from '../model/slice';

import { logoutThunk } from '@features/logout/@ex/result-modal';
import { getTraningListThunk } from '@features/traning/@ex/result-modal';

import { feedbackActions } from '@entities/feedbacks';
import { selectGetUser } from '@entities/profile';
import { sessionActions } from '@entities/session';
import { selectIsError } from '@entities/session/model/slice';

import { useAppDispatch, useAppMediaQuery, useAppSelector } from '@shared/hooks';
import { DataTestIdConfig, PathConfig } from '@shared/config';
import { showErrorForDevelop, splitString, wrapSelectedText } from '@shared/lib';
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
    const user = useAppSelector(selectGetUser);
    const isError = useAppSelector(selectIsError);
    const dispatch = useAppDispatch();

    const modalErrorTraning = useRef<modalErrorTraning | null>(null);

    const isAddTraining = typeModal.type === ModalTypeConfig.ERROR_ADD_TRAINING;
    const isTraningList = typeModal.type === ModalTypeConfig.ERROR_GET_TRANING_LIST;
    const isImage = typeModal.type === ModalTypeConfig.ERROR_ADD_IMAGE;
    const isUpdateUser = typeModal.type === ModalTypeConfig.ERROR_UPDATE_USER;

    const isSuccessBuyTariff = typeModal.type === ModalTypeConfig.SUCCESS_BUY_TARIFF;
    const dataTestID = isSuccessBuyTariff
        ? DataTestIdConfig.TARIFF_MODAL_SUCCESS
        : DataTestIdConfig.MODAL_NO_REVIEW;

    const onClickClose = useCallback(async () => {
        if (
            typeModal.type === ModalTypeConfig.ERROR_GET_FEEDBACK ||
            typeModal.type === ModalTypeConfig.ERROR_GET_TRANING
        ) {
            dispatch(resultModalActions.setResultModal({ isOpen: false, typeModal: undefined }));
            dispatch(push(PathConfig.HOME));
            return;
        }

        if (typeModal.type === ModalTypeConfig.SUCCESS_BUY_TARIFF) {
            try {
                await dispatch(logoutThunk()).unwrap();
            } catch {
                (error: unknown) => showErrorForDevelop('logout', error);
            }
        }

        modalErrorTraning.current?.destroy();
        dispatch(sessionActions.setIsError(false));
        dispatch(resultModalActions.setResultModal({ isOpen: false, typeModal: undefined }));
    }, [dispatch, typeModal.type]);

    const getTraningListAgayn = useCallback(() => {
        onClickClose();
        dispatch(getTraningListThunk()).catch((error: unknown) => {
            showErrorForDevelop('Get training list', error);
        });
    }, [dispatch, onClickClose]);

    useLayoutEffect(() => {
        if (isAddTraining && isError) {
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
    }, [isAddTraining, isError, onClickClose, typeModal.type]);

    useLayoutEffect(() => {
        if (isTraningList && isError) {
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
    }, [getTraningListAgayn, isError, isTraningList, onClickClose, typeModal.type]);

    useLayoutEffect(() => {
        if ((isImage || isUpdateUser) && isError) {
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
                okText: configButton(
                    modalCofig[typeModal.type].buttonTitle,
                    DataTestIdConfig.BIG_FILE_ERROR_CLOSE,
                ),
                onOk: onClickClose,
                centered: true,
            });

            return () => {
                if (modalErrorTraning.current) {
                    modalErrorTraning.current.destroy();
                }
            };
        }
    }, [isError, isImage, isUpdateUser, onClickClose, typeModal.type]);

    const onClickAgayn = () => {
        onClickClose();

        dispatch(feedbackActions.setIsOpenModalNewFeedback(true));
    };

    let description;

    if (
        modalCofig[typeModal.type] &&
        typeof modalCofig[typeModal.type].descriptionEmail === 'function'
    ) {
        const descriptionEmail = modalCofig[typeModal.type].descriptionEmail as (
            email: string,
        ) => string;
        description = wrapSelectedText({
            text: descriptionEmail(user.email),
            searchString: user.email,
            className: 'wrapper-email',
        });
    }

    if (
        (modalCofig[typeModal.type].desciptionMobile || modalCofig[typeModal.type].desciption) &&
        !modalCofig[typeModal.type].descriptionEmail
    ) {
        description = splitString(
            isQueryMD
                ? modalCofig[typeModal.type].desciptionMobile || ''
                : modalCofig[typeModal.type].desciption || '',
        );
    }

    return {
        dataTestID,
        description,
        isOpen,
        isAddTraining,
        isTraningList,
        getTraningListAgayn,
        onClickAgayn,
        onClickClose,
        typeModal,
        modalErrorTraning,
        // contextHolder,
    };
}
