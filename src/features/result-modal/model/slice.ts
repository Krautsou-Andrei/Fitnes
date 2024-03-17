import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { ResultModalType } from '@features/result-modal';

import type { RootState } from '@shared/types/store';

export type ResultModalSlice = {
    resultModal: {
        isOpen: boolean;
        typeModal?: ResultModalType;
    };
};

const initialState: ResultModalSlice = {
    resultModal: {
        isOpen: false,
        typeModal: undefined,
    },
};

export const resultModalSlice = createSlice({
    name: 'resultModal',
    initialState,
    reducers: {
        setResultModal: (
            state: ResultModalSlice,
            { payload }: PayloadAction<{ isOpen: boolean; typeModal?: ResultModalType }>,
        ) => {
            state.resultModal.isOpen = payload.isOpen;
            state.resultModal.typeModal = payload.typeModal;
        },
    },
});

export const selectResultModal = (state: RootState) => state.resultModal.resultModal;

export const { actions: resultModalActions } = resultModalSlice;
