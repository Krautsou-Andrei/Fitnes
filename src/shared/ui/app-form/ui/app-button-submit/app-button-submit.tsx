import { Button } from 'antd';
import { TypeAppForm } from '../../model/types';

import { LayoutConfig } from '@shared/config';

export function AppButtonSubmit({ typeButton }: { typeButton: TypeAppForm }) {
    let buttonText = '';

    if (typeButton === 'register' || typeButton === 'authentification') {
        buttonText = LayoutConfig.BUTTON_REGISTER;
    } else if (typeButton === 'confirm') {
        buttonText = LayoutConfig.BUTTON_SAVE_NEW_PASSWORD;
    }

    return (
        <Button block type='primary' htmlType='submit' size='large'>
            {buttonText}
        </Button>
    );
}
