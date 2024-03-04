import { logoutThunk } from '@features/logout/model/logout';
import { useAppDispatch } from '@shared/hooks';
import { showErrorForDevelop } from '@shared/lib';

export function useAppButtonLogout() {
    const dispatch = useAppDispatch();

    const onClick = async () => {
        try {
            await dispatch(logoutThunk()).unwrap();
        } catch {
            (error: unknown) => showErrorForDevelop('logout', error);
        }
    };

    return { onClick };
}
