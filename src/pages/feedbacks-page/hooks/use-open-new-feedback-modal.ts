import { feedbackActions, selectIsOpenModalNewFeedback } from '@entities/feedbacks';
import { useAppDispatch, useAppSelector } from '@shared/hooks';

export function useOpenNewFeedbackModal() {
    const dispatch = useAppDispatch();
    const isOpenModal = useAppSelector(selectIsOpenModalNewFeedback);

    const onClick = () => {
        dispatch(feedbackActions.setIsOpenModalNewFeedback(true));
    };

    return { isOpenModal, onClick };
}
