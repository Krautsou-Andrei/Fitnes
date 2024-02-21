import { selectIsError, sessionActions } from '@entities/session/model/slise';
import { confirmEmailThunk } from '@features/confirm-email/model/confirm-email';
import { SessionStorageConfig } from '@shared/config';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { useState } from 'react';

export function useConfirmEmailForm() {
    const dispatch = useAppDispatch();
    const isError = useAppSelector(selectIsError);
    const [valueVerification, setValueVarification] = useState<string>('');

    const onComplete = (event: unknown) => {
        const email = sessionStorage.getItem(SessionStorageConfig.EMAIL);

        if (email && typeof event === 'string') {
            const requestBody = {
                email: email,
                code: event,
            };

            dispatch(confirmEmailThunk(requestBody))
                .unwrap()
                .catch((error: Error) => {
                    setValueVarification('');
                    console.log('Confirm-email', error);
                });
        }
    };

    const onChange = (event: string) => {
        if (isError) {
            dispatch(sessionActions.setIsError(false));
        }
        setValueVarification(event);
    };

    return { isError, onChange, onComplete, valueVerification };
}
