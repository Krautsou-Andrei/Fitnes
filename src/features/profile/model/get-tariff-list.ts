import { createAsyncThunk } from '@reduxjs/toolkit';

import { Tariff, profileApi } from '@entities/profile';
import { sessionActions } from '@entities/session';

import { EventApiConfig } from '@shared/config';
import type { RootState } from '@shared/types/store';

export const getTariffListThunk = createAsyncThunk<Tariff[], void, { state: RootState }>(
    EventApiConfig.TARIFF_LIST,

    async (_, { dispatch }) => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            const result = await dispatch(profileApi.endpoints.getTariffList.initiate()).unwrap();
            return result;
        } catch (error: unknown | undefined) {
            throw new Error('Unknown error');
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    },
);
