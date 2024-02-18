import { push } from 'redux-first-history';

import { registerThunk } from '@features/register';
import { selectSessionRepeatRegister } from '@entities/session/model/slise';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { PathConfig } from '@shared/config';
import { ResultPageType } from '@shared/types/app';

export function useResultButtonClick({ type }: ResultPageType) {
    const dispatch = useAppDispatch();
    const sessionRepeatRegister = useAppSelector(selectSessionRepeatRegister);

    switch (type) {
        case 'error':
            return () => {
                dispatch(push(PathConfig.REGISTRATION));
                sessionRepeatRegister && dispatch(registerThunk(sessionRepeatRegister));
            };
        case 'errorUserExist':
            return () => {
                dispatch(push(PathConfig.REGISTRATION));
            };
        // case 'errorChangePassword':
        //     return () => {
        //
        //     };
        // case 'errorCheckEmail':
        //     return () => {
        //
        //     };
        case 'errorCheckEmailNoExist':
        case 'errorLogin':
        case 'success':
        case 'successChangePassword':
            return () => {
                dispatch(push(PathConfig.AUTH));
            };
    }
}
