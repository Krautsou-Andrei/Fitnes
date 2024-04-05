import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { inviteApi } from '../api/invite-api';
import type { Invite } from './types';

import type { RootState } from '@shared/types/store';

type InvitiesSliceType = {
    invities: Invite[];
};

const initialState: InvitiesSliceType = {
    invities: [],
};

export const invitiesSlice = createSlice({
    name: 'invities',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            inviteApi.endpoints.getInvities.matchFulfilled,
            (state: InvitiesSliceType, { payload }: PayloadAction<Invite[]>) => {
                state.invities = payload;
            },
        );
    },
});

export const selectGetInvities = (state: RootState) => state.invities.invities;

export const { actions: invitiesActions } = invitiesSlice;
