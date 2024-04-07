import { push } from 'redux-first-history';

import { getTraningThunk } from '@features/traning';

import { useAppDispatch } from './typed-react-redux-hooks';

import { PathConfig } from '@shared/config';
import { showErrorForDevelop } from '@shared/lib';

export function useLinkMenuClick() {
    const dispatch = useAppDispatch();

    const onClick = async (type: string) => {
        switch (type) {
            case PathConfig.CALENDAR:
            case PathConfig.TRAINING:
                try {
                    await dispatch(getTraningThunk()).unwrap();
                    dispatch(push(type));
                } catch (error: unknown) {
                    showErrorForDevelop(`Get menu ${type}`, error);
                }
                break;
            case PathConfig.PROFILE:
                try {
                    dispatch(push(type));
                } catch (error: unknown) {
                    showErrorForDevelop('Get prifile', error);
                }
                break;
        }
    };

    return { onClick };
}
