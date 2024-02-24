import { logoutThunk } from '@features/logout/model/logout';
import { useAppDispatch } from '@shared/hooks';

export function useAppButtonLogout() {
    const dispatch = useAppDispatch();

    const onClick = async () => {
        try {
            await dispatch(logoutThunk()).unwrap();
        } catch {
            (error: Error) => console.log('logout', error);
        }
    };

    return { onClick };
}
