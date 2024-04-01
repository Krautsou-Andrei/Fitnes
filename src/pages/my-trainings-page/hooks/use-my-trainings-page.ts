import { useEffect } from 'react';

import { getTraningListThunk } from '@features/traning';

import { useAppDispatch } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';

export function useMyTrainingsPage() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getTraningListThunk()).catch((error: unknown) => {
            showErrorForDevelop('Get training list', error);
        });
    }, [dispatch]);
}
