import { useCallback } from 'react';

import { StatusConfig } from '@features/traning/config';
import { rejectInvitieThunk } from '@features/traning/model/reject-invite';

import { Pal, selectPals, trainingActions } from '@entities/training';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';
import { AppHighlightText } from '@shared/ui';

type UsePalCardParams = {
    pal: Pal;
    classNameHighlight: string;
    searchValue?: string;
    onOpenDrawer?: () => void;
};

export function usePalCard({
    pal,
    classNameHighlight,
    onOpenDrawer,
    searchValue,
}: UsePalCardParams) {
    const dispatch = useAppDispatch();
    const partners = useAppSelector(selectPals);

    const name = useCallback(
        (name: string) => (
            <AppHighlightText
                searchParams={searchValue}
                text={name}
                classNames={classNameHighlight}
            />
        ),
        [classNameHighlight, searchValue],
    );

    const onSelectPal = () => {
        dispatch(trainingActions.setSelectPal(pal));
    };

    const handlerOpenDrawer = () => {
        dispatch(trainingActions.setSelectPal(pal));
        dispatch(trainingActions.setCreateTrainingName(pal.trainingType));
        if (onOpenDrawer) {
            onOpenDrawer();
        }
    };

    const handlerRejectTraining = (id: string) => {
        dispatch(rejectInvitieThunk({ id, status: StatusConfig.REJECTED }))
            .unwrap()
            .then(() => dispatch(trainingActions.removeUserJointTraining({ id: id })))
            .catch((error: unknown) => {
                showErrorForDevelop('Get training pals', error);
            });
    };
    const handlerButtonPal = () => {
        pal.status === null ? handlerOpenDrawer() : handlerRejectTraining(pal.inviteId);
    };
    return {
        state: { partners },
        functions: {
            name,
            handlerButtonPal,
            onSelectPal,
        },
    };
}
