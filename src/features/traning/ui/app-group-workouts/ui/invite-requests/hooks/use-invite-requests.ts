import { useState } from 'react';

import { StatusConfig } from '@features/traning/config';
import { rejectInvitieThunk } from '@features/traning/model/reject-invite';
import { sendAnswerInvitieThunk } from '@features/traning/model/send-answer-invite';

import { selectGetInvities } from '@entities/invite';
import {
    useLazyGetTrainingPalsQuery,
    useLazyGetUserJointTrainingListQuery,
} from '@entities/training';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';

export function useInviteRequests() {
    const dispatch = useAppDispatch();
    const [getJointTraining] = useLazyGetUserJointTrainingListQuery();
    const [getTrainingPal] = useLazyGetTrainingPalsQuery();

    const invities = useAppSelector(selectGetInvities);

    const [openInviteTrainingCard, setOpenInviteTrainingCard] = useState(false);
    const [selectInvite, setSelectInvite] = useState('');
    const [isCollapsed, setIsCollapsed] = useState(true);

    const invitiesRender = isCollapsed ? [invities[0]] : invities;

    const acceptInviteHandler = (id: string) => {
        dispatch(sendAnswerInvitieThunk({ id, status: StatusConfig.ACCEPTED }))
            .unwrap()
            .then(() => {
                getJointTraining();
                getTrainingPal();
            })
            .catch((error: unknown) => {
                showErrorForDevelop('Get training pals', error);
            });
    };

    const rejectInviteHandler = (id: string) => {
        dispatch(rejectInvitieThunk({ id, status: StatusConfig.REJECTED }))
            .unwrap()
            .then(() => getJointTraining())
            .catch((error: unknown) => {
                showErrorForDevelop('Get training pals', error);
            });
    };

    const handlerOpenInviteTrainingCard = (id: string) => {
        setSelectInvite(id);
        setOpenInviteTrainingCard(true);
    };

    const collapseHandler = () => {
        setIsCollapsed((prev) => !prev);
    };

    return {
        state: {
            openInviteTrainingCard,
            selectInvite,
            invities,
            invitiesRender,
            isCollapsed,
        },
        functions: {
            acceptInviteHandler,
            rejectInviteHandler,
            handlerOpenInviteTrainingCard,
            collapseHandler,
            setOpenInviteTrainingCard,
        },
    };
}
