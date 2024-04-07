import { useEffect, useState } from 'react';

import { getTraningListThunk } from '@features/traning';

import { useAppDispatch } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';

export function useMyTrainingsPage() {
    const dispatch = useAppDispatch();
    const [isMarathonTabs, setIsMarathonTabs] = useState('');
    useEffect(() => {
        dispatch(getTraningListThunk()).catch((error: unknown) => {
            showErrorForDevelop('Get training list', error);
        });
    }, [dispatch]);

    const onChangeTabs = (key: string) => {
        setIsMarathonTabs(key);
    };

    return {
        state: {
            isMarathonTabs,
        },
        functions: {
            onChangeTabs,
        },
    };
}
