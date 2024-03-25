import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

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
    return (
        <>
            {type === ModalTypeConfig.SUCCESS_BUY_TARIFF ? (
                <>
                    <div className='extra-buy-tariff'>{title}</div>
                    <Button type='text' onClick={onClickClose} className='extra-buy-tariff-close-icon'>
                        <CloseOutlined  />
                    </Button>
                </>
            ) : (
                <>
                    {isOneButton(type) && (
                        <Button type='primary' className={className} onClick={onClickClose}>
                            {title}
                        </Button>
                    )}
                    {!isOneButton(type) && (
                        <div className={className}>
                            <Button
                                type='primary'
                                onClick={onClick}
                                data-test-id={DataTestIdConfig.WRITE_REVIEW_NOT_SAVE_MODAL}
                            >
                                {title}
                            </Button>
                            <Button onClick={onClickClose}>{titleClose}</Button>
                        </div>
                    )}
                </>
            )}
        </>
    );
}
