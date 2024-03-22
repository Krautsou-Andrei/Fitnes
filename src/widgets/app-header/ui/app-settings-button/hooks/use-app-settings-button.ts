import { push } from 'redux-first-history';

import { PathConfig } from '@shared/config';
import { useAppDispatch } from '@shared/hooks';

export function useAppSettingsButton() {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(push(PathConfig.SETTINGS));
    };

    return { onClick };
}
