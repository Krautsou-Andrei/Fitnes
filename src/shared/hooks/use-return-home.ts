import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from './typed-react-redux-hooks';

import { selectIsGetRequest } from '@entities/training';

import { PathConfig } from '@shared/config';

export function useReturnHome() {
    const isGetRequest = useAppSelector(selectIsGetRequest);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isGetRequest) {
            navigate(PathConfig.HOME);
        }
    }, [isGetRequest, navigate]);
}
