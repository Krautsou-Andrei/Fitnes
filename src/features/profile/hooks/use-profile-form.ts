import { useEffect, useState } from 'react';
import { Form } from 'antd';
import moment from 'moment';

import { resultSuccessFetch } from '../lib';

import { updateUserThunk } from '@features/profile';
import {
    ModalTypeConfig,
    modalResultConfig,
    resultModalActions,
} from '@features/result-modal/@ex/profile';

import { RequestUserUpdateBody, selectGetUser } from '@entities/profile';

import { LayoutConfig } from '@shared/config';
import { StatusError } from '@shared/api';
import { useAppDispatch, useAppMediaQuery, useAppSelector } from '@shared/hooks';
import { config, getInitialAvatar, showErrorForDevelop } from '@shared/lib';
import { sessionActions } from '@entities/session';

export function useProfileForm() {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectGetUser);
    const {isQueryXS} = useAppMediaQuery()
    const [isDisabledSubmit, setIsDisabledSubmit] = useState<boolean>(true);
    const [isPassword, setIsPassword] = useState<boolean>(false);

    const isImage = Boolean(user.imgSrc);
    const url = user.imgSrc;

    const initialAvatar = getInitialAvatar(url);

    useEffect(() => {
        if (user.birthday) {
            form.setFieldValue(LayoutConfig.INPUT_TYPE_BIRTH_DAY, moment(user.birthday));
        }
        form.setFieldValue(LayoutConfig.INPUT_TYPE_FIRST_NAME, user.firstName);
        form.setFieldValue(LayoutConfig.INPUT_TYPE_LAST_NAME, user.lastName);
        form.setFieldValue(LayoutConfig.INPUT_TYPE_EMAIL, user.email);
        form.setFieldValue(LayoutConfig.INPUT_TYPE_AVATAR, user.imgSrc);
        form.setFieldValue(LayoutConfig.INPUT_TYPE_PASSWORD, undefined);
        form.setFieldValue(LayoutConfig.INPUT_TYPE_PASSWORD_CONFIRM, undefined);
    }, [form, user.birthday, user.email, user.firstName, user.imgSrc, user.lastName]);

    const validateForm = () => {
        const avatar = form.getFieldValue(LayoutConfig.INPUT_TYPE_AVATAR);
        const password = form.getFieldValue(LayoutConfig.INPUT_TYPE_PASSWORD);
        const passwordConfirm = form.getFieldValue(LayoutConfig.INPUT_TEXT_PASSWORD_CONFIRM);

        if (avatar?.file?.status === 'error') {
            if (avatar.file.error.status === StatusError.ERROR_409) {
                dispatch(sessionActions.setIsError(true));
                dispatch(
                    resultModalActions.setResultModal({
                        isOpen: false,
                        typeModal: {
                            type: modalResultConfig[ModalTypeConfig.ERROR_ADD_IMAGE].type,
                            status: modalResultConfig[ModalTypeConfig.ERROR_ADD_IMAGE].status,
                        },
                    }),
                );
            }
            setIsDisabledSubmit(true);
        } else {
            setIsDisabledSubmit(false);
        }

        if (password || passwordConfirm) {
            setIsPassword(true);
        } else {
            setIsPassword(false);
        }
    };

    const onFinish = async ({
        birthday,
        email,
        firstName,
        lastName,
        imgSrc,
        password,
    }: RequestUserUpdateBody) => {
        let url;

        if (typeof imgSrc === 'object') {
            if (imgSrc?.file?.response?.url) {
                url = `${config.API_ENDPOINT_IMAGE}${imgSrc.file.response.url}`;
            }
        }

        if (typeof imgSrc === 'string') {
            url = imgSrc;
        }

        const body = {
            email: email,
            birthday: birthday,
            firstName: firstName,
            lastName: lastName,
            password: password,
            ...(url ? { imgSrc: url } : { imgSrc: '' }),
        };

        try {
            await dispatch(updateUserThunk(body)).unwrap();
            dispatch(resultSuccessFetch());
        } catch {
            (error: unknown) => {
                showErrorForDevelop('update user', error);
            };
        } finally {
            form.setFieldValue(LayoutConfig.INPUT_TYPE_PASSWORD, undefined);
            form.setFieldValue(LayoutConfig.INPUT_TYPE_PASSWORD_CONFIRM, undefined);
            setIsDisabledSubmit(true);
        }
    };

    return {
        form,
        isDisabledSubmit,
        isPassword,
        isImage,
        isQueryXS,
        initialAvatar,
        validateForm,
        onFinish,
    };
}
