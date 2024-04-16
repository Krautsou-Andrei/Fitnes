import { StatusConfig } from '@features/traning/config';
import { rejectInvitieThunk } from '@features/traning/model/reject-invite';

import { selectPal, trainingActions } from '@entities/training';

import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';

type UsePalModal = {
    onCloseModal: () => void;
};

export function usePalModal({ onCloseModal }: UsePalModal) {
    const dispatch = useAppDispatch();

    const pal = useAppSelector(selectPal);

    const handlerRejectTraining = (id: string | undefined) => {
        if (id) {
            dispatch(rejectInvitieThunk({ id, status: StatusConfig.REJECTED }))
                .unwrap()
                .then(() => {
                    dispatch(trainingActions.removeUserJointTraining({ id: id }));
                    onCloseModal();
                })
                .catch((error: unknown) => {
                    showErrorForDevelop('Get training pals', error);
                });
        }
    };

    return {
        state: {
            pal,
        },
        functions: {
            handlerRejectTraining,
        },
    };
}
