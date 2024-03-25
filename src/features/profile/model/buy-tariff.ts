import { createAsyncThunk } from '@reduxjs/toolkit';

import { resultSuccessFetch } from '../lib';

import { ModalTypeConfig } from '@features/result-modal/@ex/profile';

import { RequestBuyTariffBody, profileApi } from '@entities/profile';
import { sessionActions } from '@entities/session';

import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';

export const buyTariffThunk = createAsyncThunk<void, RequestBuyTariffBody, { state: RootState }>(
    EventApiConfig.BUY_TARIFF,

    async (body, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            await dispatch(profileApi.endpoints.buyTariff.initiate(body)).unwrap();
            dispatch(resultSuccessFetch(ModalTypeConfig.SUCCESS_BUY_TARIFF));
        } catch (error: unknown | undefined) {
            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
