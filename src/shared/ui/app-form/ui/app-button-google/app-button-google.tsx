import { Button, ButtonProps } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';

import { buttonText } from './lib/button-text';
import type { TypeAppForm } from '../../model/types';

import { useAppMediaQuery } from '@shared/hooks';

interface AppButtonGoogProps extends ButtonProps {
    typeButton: TypeAppForm;
}

export function AppButtonGoogle({ typeButton, ...res }: AppButtonGoogProps) {
    const { isQueryXS } = useAppMediaQuery();
    return (
        <Button block htmlType='submit' size='large' {...res}>
            {!isQueryXS && <GooglePlusOutlined />}
            {buttonText(typeButton)}
        </Button>
    );
}
