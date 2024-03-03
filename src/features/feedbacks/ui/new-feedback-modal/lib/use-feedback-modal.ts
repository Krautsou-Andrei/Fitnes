import { useState } from 'react';
import { Form } from 'antd';

import { AddFeedbackThunk } from '@features/feedbacks/model/addFeedback';
import { customIcons, customIconsActive } from '@features/feedbacks/config/custom-icon-config';

import { selectIsLoadingn } from '@entities/session';
import {
    RequesFeedbackBody,
    feedbackActions,
    selectIsOpenModalNewFeedback,
} from '@entities/feedbacks';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';

export function useFeedbackModal() {
    const dispatch = useAppDispatch();
    const isOpenModal = useAppSelector(selectIsOpenModalNewFeedback);
    const isLoading = useAppSelector(selectIsLoadingn);
    const [form] = Form.useForm();
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [isValid, setIsValid] = useState(false);

    const checkRating = async (rating: number) => {
        setSelectedRating(rating);
        setIsValid(() => rating > 0);
    };

    const closeModal = () => {
        dispatch(feedbackActions.setIsOpenModalNewFeedback(false));
    };

    const onFinish = async (value: RequesFeedbackBody) => {
        try {
            await dispatch(AddFeedbackThunk(value)).unwrap();
            setIsValid(false);
        } catch (error: unknown) {
            showErrorForDevelop('Validate form add feedback', error);
        } finally {
            closeModal();
        }
    };

    const onSubmit = () => {
        form.submit();
    };

    const customCharacter = ({ index = 0 }) => {
        if (index + 1 <= selectedRating) {
            return customIconsActive[selectedRating];
        } else {
            return customIcons[index + 1];
        }
    };

    return {
        closeModal,
        form,
        onSubmit,
        onFinish,
        checkRating,
        isLoading,
        isOpenModal,
        isValid,
        customCharacter,
    };
}
