import { useEffect, useState } from 'react';

import { getTrainingPalsThunk } from '../model/get-training-pals';
import { getBestTraining } from '../lib';
import { getUserJointTrainingListThunk } from '../model/get-user-joint-training-list';
import { getUserJointTrainingListBestThunk } from '../model/get-user-joint-training-list-best';

import {
    selectCreateTraining,
    selectPals,
    selectTraining,
    selectTrainingName,
    selectUsersJoint,
} from '@entities/training/model/slice';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
import {
    formatDate,
    getSortUserJointTrainingList,
    setSessionStorage,
    showErrorForDevelop,
} from '@shared/lib';
import { DateFormatConfig, SessionStorageConfig } from '@shared/config';

export function useGroupWorkouts() {
    const dispatch = useAppDispatch();
    const trainingPals = useAppSelector(selectPals);
    const trainings = useAppSelector(selectTraining);
    const trainingNames = useAppSelector(selectTrainingName);
    const userJointTrainingListState = useAppSelector(selectUsersJoint);
    const listTraining = useAppSelector(selectTrainingName);
    const createTraining = useAppSelector(selectCreateTraining);

    const chankSelector = formatDate(
        createTraining.date || '',
        DateFormatConfig.FORMAT_YYYY_MM_DD_DASHED,
    );

    const trainingsDay = trainings
        .filter((item) => item.date === chankSelector)
        .map((item) => item.training);

    const [searchValue, setSearchValue] = useState<string>('');
    const [isOpenInviteList, setIsOpenInviteList] = useState<boolean>(false);

    const userJointTrainingList = getSortUserJointTrainingList(userJointTrainingListState).filter(
        (pal) => pal.name.toLowerCase().includes(searchValue.toLowerCase()),
    );

    useEffect(() => {
        dispatch(getTrainingPalsThunk()).catch((error: unknown) => {
            showErrorForDevelop('Get training pals', error);
        });
    }, [dispatch]);

    const getJointTrainingListHandler = () => {
        dispatch(getUserJointTrainingListThunk())
            .unwrap()
            .then(() => {
                setIsOpenInviteList(true);
            })
            .catch((error: unknown) => {               
                showErrorForDevelop('Get user joint training list', error);
            });
    };

    const getJointTrainingListBestHandler = () => {
        const best = getBestTraining(trainingNames, trainings);
        if (best) {
            setSessionStorage(SessionStorageConfig.BEST_TRAINING, best);
        }

        dispatch(getUserJointTrainingListBestThunk({ trainingType: best }))
            .unwrap()
            .then(() => {
                setIsOpenInviteList(true);
            })
            .catch((error: unknown) => {
                showErrorForDevelop('Get user joint training list best', error);
            });
    };

    const onToggleInviteList = () => {
        setIsOpenInviteList((prev) => !prev);
    };

    const onSearch = (value: string) => {
        setSearchValue(value);
    };

    return {
        state: {
            createTraining,
            isOpenInviteList,
            listTraining,
            searchValue,
            trainings,
            trainingsDay,
            trainingPals,
            userJointTrainingList,
        },
        functions: {
            getJointTrainingListHandler,
            getJointTrainingListBestHandler,
            onSearch,
            onToggleInviteList,
        },
    };
}
