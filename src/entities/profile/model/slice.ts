import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { profileApi } from '../api/profile-api';
import type { Tariff, User } from './types';

import type { RootState } from '@shared/types/store';

type ProfileSliceType = {
    tariffList: Tariff[];
    profile: User;
    isProfile: boolean;
};

const initialState: ProfileSliceType = {
    tariffList: [],
    profile: {
        email: '',
        firstName: '',
        lastName: '',
        birthday: '',
        imgSrc: '',
        readyForJointTraining: false,
        sendNotification: false,
        tariff: {
            tariffId: '',
            expired: '',
        },
    },
    isProfile: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setIsProfile: (state: ProfileSliceType, { payload }: PayloadAction<boolean>) => {
            state.isProfile = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            profileApi.endpoints.getUser.matchFulfilled,
            (state: ProfileSliceType, { payload }: PayloadAction<User>) => {
                state.isProfile = true;
                state.profile = payload;
            },
        );
        builder.addMatcher(
            profileApi.endpoints.getTariffList.matchFulfilled,
            (state: ProfileSliceType, { payload }: PayloadAction<Tariff[]>) => {
                state.tariffList = payload;
            },
        );
    },
});

export const selectGetUser = (state: RootState) => state.profile.profile;
export const selectIsProfile = (state: RootState) => state.profile.isProfile;
export const selectGetTariffList = (state: RootState) => state.profile.tariffList;

export const { actions: profileActions } = profileSlice;
