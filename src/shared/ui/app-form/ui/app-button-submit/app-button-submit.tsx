import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

import { TypeAppForm } from '../../model/types';

import { LayoutConfig } from '@shared/config';

interface AppButtonSubmitInterface extends ButtonProps {
    typeButton: TypeAppForm;
}

export function AppButtonSubmit({ typeButton, ...rest }: AppButtonSubmitInterface) {
    let buttonText = '';

    if (typeButton === 'register' || typeButton === 'authentification') {
        buttonText = LayoutConfig.BUTTON_REGISTER;
    } else if (typeButton === 'confirm') {
        buttonText = LayoutConfig.BUTTON_SAVE_NEW_PASSWORD;
    }

    return (
        <Button block type='primary' htmlType='submit' size='large' {...rest}>
            {buttonText}
        </Button>
    );
}
