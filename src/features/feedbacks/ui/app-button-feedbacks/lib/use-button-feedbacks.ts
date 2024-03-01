import { push } from 'redux-first-history';

import { useAppDispatch } from '@shared/hooks';
import { HistoryStateConfig, PathConfig } from '@shared/config';

export function useButtonFeedback() {
    const dispatch = useAppDispatch();

    const onclick = async () => {
        dispatch(push(PathConfig.FEEDBACKS, { feedbacks: HistoryStateConfig.FEEDBACK_PAGE }));
    };

    return { onclick };
}
