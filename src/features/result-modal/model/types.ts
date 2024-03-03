import { ResultStatusType } from 'antd/lib/result';
import { ModalTypeConfig } from '../config/modal-type-config';

export type ResultModalCard = {
    buttonCloseTitle?: string;
    buttonTitle: string;
    desciption?: string;
    desciption_mobile?: string;
    title: string;
};

export type ResultModalType = {
    type: ModalTypeConfig;
    status: ResultStatusType;
};
