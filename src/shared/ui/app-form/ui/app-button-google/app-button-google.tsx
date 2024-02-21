import { Button } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { TypeAppForm } from '../../model/types';

import { LayoutConfig } from '@shared/config';

export function AppButtonGoogle({ typeButton }: { typeButton: TypeAppForm }) {
    let buttonText = '';

    if (typeButton === 'register') {
        buttonText = LayoutConfig.BUTTON_REGISTER_GOOGLE;
    } else if (typeButton === 'authentification') {
        buttonText = LayoutConfig.BUTTON_AUTHENTIFICATION_COOGLE;
    }

    return (
        <Button block htmlType='submit' size='large'>
            <GooglePlusOutlined />
            {buttonText}
        </Button>
    );
}
