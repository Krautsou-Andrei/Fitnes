import { push } from 'redux-first-history';

import { BASENAME, PathConfig } from '@shared/config';
import { useAppDispatch } from '@shared/hooks';

export function useAppSettingsButton() {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(push(`${BASENAME}${PathConfig.SETTINGS}`));
    };

    return { onClick };
}
