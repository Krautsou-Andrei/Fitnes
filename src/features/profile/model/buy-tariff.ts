import { createAsyncThunk } from '@reduxjs/toolkit';

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
        } catch (error: unknown | undefined) {
            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
