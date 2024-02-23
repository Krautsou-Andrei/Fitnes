import { Button } from 'antd';
import type { ButtonProps } from 'antd/lib/button';

import { buttonText, dataTestId } from './lib';
import type { TypeAppForm } from '../../model/types';

interface AppButtonSubmitInterface extends ButtonProps {
    typeButton: TypeAppForm;
}

export function AppButtonSubmit({ typeButton, ...rest }: AppButtonSubmitInterface) {
    return (
        <Button
            block
            type='primary'
            htmlType='submit'
            size='large'
            {...rest}
            data-test-id={dataTestId(typeButton)}
        >
            {buttonText(typeButton)}
        </Button>
    );
}
