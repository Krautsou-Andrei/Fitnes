import { useEffect } from 'react';
import { useLazyGetUserQuery } from '@entities/profile';
import { useLazyGetInvitiesQuery } from '@entities/invite';
import { useAppSelector } from '@shared/hooks';
import { selectPals, useLazyGetTrainingPalsQuery } from '@entities/training';

export function useBaseLayout() {
    const partners = useAppSelector(selectPals);
    const [getUser] = useLazyGetUserQuery();
    const [getInvities] = useLazyGetInvitiesQuery();
    const [getTrainingPartners] = useLazyGetTrainingPalsQuery();

    useEffect(() => {
        getUser();
    }, [getUser]);

    useEffect(() => {
        getInvities();
    }, [getInvities]);

    useEffect(() => {
        if (!partners.length) {
            getTrainingPartners();
        }
    }, [getTrainingPartners, partners]);
}
