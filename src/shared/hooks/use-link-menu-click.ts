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
                try {
                    await dispatch(getTraningThunk()).unwrap();
                    dispatch(push(type));
                } catch (error: unknown) {
                    showErrorForDevelop('Get menu calendar', error);
                }
        }
    };

    return { onClick };
}
