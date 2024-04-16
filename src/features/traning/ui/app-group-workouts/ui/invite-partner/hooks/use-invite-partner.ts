import { useState } from 'react';

import { selectPals } from '@entities/training';
import { useAppSelector } from '@shared/hooks';

export function useInvitePartners() {
    const partners = useAppSelector(selectPals);
    const [isOpenPalModal, setIsOpenPalModal] = useState<boolean>(false);

    const onClosePalModal = () => {
        setIsOpenPalModal(false);
    };

    const onOpenPalModal = () => {
        setIsOpenPalModal(true);
    };
    
    return {
        state: {
            isOpenPalModal,
            partners,
        },
        functions: {
            onClosePalModal,
            onOpenPalModal,
        },
    };
}
