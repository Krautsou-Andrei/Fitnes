import { useEffect } from 'react';

import { getTraningListThunk } from '@features/traning';

import { selectTraining, selectTrainingName } from '@entities/training';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';

export function useTraningPage() {
    const trainings = useAppSelector(selectTraining);
    const listNameTraining = useAppSelector(selectTrainingName);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTraningListThunk()).catch((error: unknown) => {
            showErrorForDevelop('Get training list', error);
        });
    }, [dispatch]);

    return { listNameTraining, trainings };
}
