import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@shared/types/store';

type SiderSliceType = {
    isCollapsed: boolean;
};

const initialState: SiderSliceType = {
    isCollapsed: false,
};

export const siderSlice = createSlice({
    name: 'sider',
    initialState,
    reducers: {
        setIsCollapsed: (state: SiderSliceType, { payload }: PayloadAction<boolean>) => {
            state.isCollapsed = payload;
        },
    },
});

export const selectIsCollapsed = (state: RootState) => state.sider.isCollapsed;

export const { actions: siderActions } = siderSlice;
