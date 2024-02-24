import { selectIsLoadingn } from '@entities/session/model/slise';
import { useAppSelector } from '@shared/hooks';
import { AppLoader } from '@shared/ui';

export function QueryLoader() {
    const isLoading = useAppSelector(selectIsLoadingn);
    return <>{isLoading ? <AppLoader /> : null}</>;
}
