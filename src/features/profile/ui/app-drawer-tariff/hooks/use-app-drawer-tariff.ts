import { useState, useEffect } from 'react';
import { Form } from 'antd';

import { SettingsConfig } from '@features/profile/config';
import { selectGetTariffList } from '@entities/profile';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { buyTariffThunk } from '@features/profile/model/buy-tariff';
import { showErrorForDevelop } from '@shared/lib';

export function useAppDrawerTariff(isOpen: boolean) {
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const tariffList = useAppSelector(selectGetTariffList);
    const [isDisabledSubmit, setIsDisablesSubmit] = useState<boolean>(true);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const onHandleChange = () => {
        setIsDisablesSubmit(false);
    };

    const onHandleFinish = async () => {
        const id = tariffList[0].id as string;
        const value = form.getFieldValue(SettingsConfig.INPUT_TYPE_RADIO);

        const body = {
            tariffId: id,
            days: value,
        };

        try {
            await dispatch(buyTariffThunk(body)).unwrap();
        } catch {
            (error: unknown) => {
                showErrorForDevelop('update user', error);
            };
        } finally {
            setIsDisablesSubmit(true);
        }
        console.log(body);
    };

    return { form, isDisabledSubmit, tariffList, onHandleChange, onHandleFinish };
}
