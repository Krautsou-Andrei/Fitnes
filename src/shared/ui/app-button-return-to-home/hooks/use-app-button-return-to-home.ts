import { push } from 'redux-first-history';

import {BASENAME, PathConfig } from '@shared/config';
import { useAppDispatch } from '@shared/hooks';

export function useAppButtonReturnToHome() {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(push(`${BASENAME}${PathConfig.HOME}`));
    };

    return { onClick };
}
