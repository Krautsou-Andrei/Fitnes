import { ModalTypeConfig } from '../../modal-type-config';

export function isOneButton(type: ModalTypeConfig) {
    return (
        type === ModalTypeConfig.SUCCESS_ADD_FEEDBACK ||
        type === ModalTypeConfig.ERROR_GET_FEEDBACK ||
        type === ModalTypeConfig.ERROR_GET_TRANING
    );
}
