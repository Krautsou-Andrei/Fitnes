import { useEffect } from 'react';
import { Form } from 'antd';

import { SettingsConfig } from '../config';
import { updateUserThunk } from '../model/update-user';

import { selectGetUser } from '@entities/profile';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';

export function useSettingsForm() {
    const [form] = Form.useForm();
    const user = useAppSelector(selectGetUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        form.setFieldValue(
            SettingsConfig.INPUT_TYPE_FOR_JOINT_TRAINING,
            user.readyForJointTraining,
        );
        form.setFieldValue(SettingsConfig.INPUT_TYPE_NOTIFICATiON, user.sendNotification);
        form.setFieldValue(SettingsConfig.INPUT_TYPE_THEME, false);
    }, [form, user.readyForJointTraining, user.sendNotification]);

    const onHandleChange = async (values: { name: SettingsConfig[] }[]) => {
        const isJointTraining = form.getFieldValue(SettingsConfig.INPUT_TYPE_FOR_JOINT_TRAINING);
        const isNotification = form.getFieldValue(SettingsConfig.INPUT_TYPE_NOTIFICATiON);
        const isThemeEvent = values[0].name[0] === SettingsConfig.INPUT_TYPE_THEME;

        const body = {
            readyForJointTraining: isJointTraining,
            sendNotification: isNotification,
        };

        if (!isThemeEvent) {
            try {
                await dispatch(updateUserThunk(body)).unwrap();
            } catch {
                (error: unknown) => {
                    showErrorForDevelop('update user', error);
                };
            }
        }
    };

    return { form, onHandleChange, user };
}
