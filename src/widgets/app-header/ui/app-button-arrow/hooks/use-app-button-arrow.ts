import { goBack } from 'redux-first-history';
import { useAppDispatch } from '@shared/hooks';

export function useAppButtonArrow() {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(goBack());
    };

    return { onClick };
}
