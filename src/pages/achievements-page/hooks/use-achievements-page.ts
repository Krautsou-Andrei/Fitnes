import { useEffect, useState } from 'react';

import { getTraningListThunk } from '@features/traning';

import { useAppDispatch } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';
import { AchievementsKeyConfig } from '@shared/config';

export function useAchievementsPage() {
    const dispatch = useAppDispatch();

    const [activeKey, setActiveKey] = useState<string>(AchievementsKeyConfig.ONE_WEEK);

    useEffect(() => {
        dispatch(getTraningListThunk()).catch((error: unknown) => {
            showErrorForDevelop('Get training list', error);
        });
    }, [dispatch]);

    const onChangeTabs = (key: string) => {
        setActiveKey(key);
    };

    return {
        state: {
            activeKey,
        },
        functions: {
            onChangeTabs,
        },
    };
}
