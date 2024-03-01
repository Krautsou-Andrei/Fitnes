import { useState } from 'react';
import { Form } from 'antd';

import { AddFeedbackThunk } from '@features/feedbacks/model/addFeedback';
import { customIcons, customIconsActive } from '@features/feedbacks/config/custom-icon-config';

import { RequesFeedbackBody } from '@entities/feedbacks';

import { useAppDispatch } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';

export function useFeedbackModal(closeModal: () => void) {
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [isValid, setIsValid] = useState(false);

    const checkRating = async (rating: number) => {
        setSelectedRating(rating);
        setIsValid(() => rating > 0);
    };

    const onFinish = async (value: RequesFeedbackBody) => {
        closeModal();
        try {
            await dispatch(AddFeedbackThunk(value)).unwrap();
            form.resetFields();
            setIsValid(false);
        } catch (error: unknown) {
            showErrorForDevelop('Validate form add feedback', error);
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

    return { form, onSubmit, onFinish, checkRating, isValid, customCharacter };
}
