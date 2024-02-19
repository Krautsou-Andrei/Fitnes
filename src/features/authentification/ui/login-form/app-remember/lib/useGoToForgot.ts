import { push } from 'redux-first-history';

import { HistoryStateConfig, PathConfig } from '@shared/config';
import { useAppDispatch } from '@shared/hooks';

export function useGoToForgot() {
    const dispatch = useAppDispatch();

    const goToforgot = () => {
        dispatch(push(PathConfig.AUTH_CONFIRM_EMAIL), {
            forgot: HistoryStateConfig.CONFIRM_PAGE_STEP_ONE,
        });
    };

    return goToforgot;
}
