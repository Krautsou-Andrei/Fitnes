import { push } from 'redux-first-history';

import { PathConfig } from '@shared/config';
import { useAppDispatch } from '@shared/hooks';

export function useAppButtonReturnToHome() {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(push(PathConfig.HOME));
    };

    return { onClick };
}
