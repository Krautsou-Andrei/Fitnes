import { getFeedbacksThunk } from '@features/feedbacks/model/getFeedbacks';
import { sessionActions } from '@entities/session';

import { useAppDispatch } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';

export function useButtonFeedback() {
    const dispatch = useAppDispatch();

    const onclick = async () => {
        dispatch(sessionActions.setIsLoading(true));

        try {
            await dispatch(getFeedbacksThunk()).unwrap();
        } catch (error: unknown) {
            showErrorForDevelop('Get Feedbacks', error);
        } finally {
            dispatch(sessionActions.setIsLoading(false));
        }
    };

    return { onclick };
}
