import { useEffect } from 'react';

import { getTraningListThunk } from '@features/traning';

import { trainingActions } from '@entities/training';

import { useAppDispatch } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';
import { AchievementsDefaultConfig, AchievementsKeyConfig } from '@shared/config';

export function useAchievementsPage() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getTraningListThunk()).catch((error: unknown) => {
            showErrorForDevelop('Get training list', error);
        });
    }, [dispatch]);

    const onChangeTabs = (key: string) => {
        if (key === AchievementsKeyConfig.ONE_WEEK) {
            dispatch(
                trainingActions.setAchievementsType(AchievementsDefaultConfig.NUMBERS_DAYS_WEEK),
            );
        }
        if (key === AchievementsKeyConfig.ONE_MONTH) {
            dispatch(
                trainingActions.setAchievementsType(AchievementsDefaultConfig.NUMBERS_DAYS_MONTH),
            );
        }
    };

    return {
        functions: {
            onChangeTabs,
        },
    };
}
