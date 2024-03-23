import { selectAccessToken } from '@entities/session';
import { useAppSelector } from '.';
import { LocalStorageConfig } from '@shared/config';
import { getLocalStorage } from '@shared/lib';

export function useGetToken() {
    const tokenStore = useAppSelector(selectAccessToken);
    const tokenLocalStorage = getLocalStorage(LocalStorageConfig.ACCESS_TOKEN);

    return tokenStore || tokenLocalStorage;
}
