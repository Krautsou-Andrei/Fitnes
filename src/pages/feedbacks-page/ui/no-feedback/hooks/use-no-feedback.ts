import { FeedbackConfig } from '@pages/feedbacks-page/config/feedback-config';

import { useAppMediaQuery, useOpenNewFeedbackModal } from '@shared/hooks';
import { splitString } from '@shared/lib';

export function useNoFeedback() {
    const { isQueryMD } = useAppMediaQuery();
    const { isOpenModal, onClick } = useOpenNewFeedbackModal();

    const description = splitString(
        isQueryMD ? FeedbackConfig.DESCRIPTION_MOBILE : FeedbackConfig.DESCRIPTION,
    );

    return { isOpenModal, description, onClick };
}
