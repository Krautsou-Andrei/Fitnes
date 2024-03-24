import { useEffect, useState } from 'react';
import moment from 'moment';

import { SettingsPageConfig } from '../config';

import { getTariffListThunk } from '@features/profile/model/get-tariff-list';
import { selectGetTariffList, selectGetUser } from '@entities/profile';

import { useAppDispatch, useAppSelector, useOpenNewFeedbackModal } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';

export function useSettingsPage() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectGetUser);
    const tariffList = useAppSelector(selectGetTariffList);
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const date = moment(user.tariff?.expired);
    const month = date.month() + 1;
    const day = date.date();

    const activeDays = ` ${SettingsPageConfig.BEFORE_TEXT} ${String(day).padStart(2, '0')}.${String(
        month,
    ).padStart(2, '0')}`;

    useEffect(() => {
        let ignore = false;
        if (!ignore) {
            dispatch(getTariffListThunk()).catch((error: unknown) => {
                showErrorForDevelop('Get Tariff List', error);
            });
        }

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    const { onClick } = useOpenNewFeedbackModal();

    const onToggleDrawer = () => {
        setIsOpenDrawer((prev) => !prev);
    };

    return { onClick, tariffList, isOpenDrawer, onToggleDrawer, activeDays };
}
