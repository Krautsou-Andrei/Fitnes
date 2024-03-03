import { Button } from 'antd';

import { ModalTypeConfig } from '../modal-type-config';
import { isOneButton } from './lib/is-one-button';

import { DataTestIdConfig } from '@shared/config';

type ExtraProps = {
    type: ModalTypeConfig;
    className: string;
    title: string;
    titleClose?: string;
    onClick?: () => void;
    onClickClose?: () => void;
};

export function Extra({ type, className, title, titleClose, onClick, onClickClose }: ExtraProps) {
    console.log('type', type, type === ModalTypeConfig.SUCCESS_ADD_FEEDBACK);
    return (
        <>
            {isOneButton(type) && (
                <Button type='primary' className={className} onClick={onClickClose}>
                    {title}
                </Button>
            )}
            {!isOneButton(type) && (
                <>
                    <Button
                        type='primary'
                        className={className}
                        onClick={onClick}
                        data-test-id={DataTestIdConfig.WRITE_REVIEW_NOT_SAVE_MODAL}
                    >
                        {title}
                    </Button>
                    <Button className={className} onClick={onClickClose}>
                        {titleClose}
                    </Button>
                </>
            )}
        </>
    );
}
