import { selectGetTariffList } from '@entities/profile';
import { getTariffListThunk } from '@features/profile/model/get-tariff-list';
import { useAppDispatch, useAppSelector, useOpenNewFeedbackModal } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';
import { useEffect, useState } from 'react';

export function useSettingsPage() {
    const dispatch = useAppDispatch();
    const tariffList = useAppSelector(selectGetTariffList);
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

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

    return { onClick, tariffList, isOpenDrawer, onToggleDrawer };
}
