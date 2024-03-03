import { ModalTypeConfig } from './modal-type-config';
import type { ResultModalType, ResultModalCard } from '../model/types';

type ModalConfig = {
    [key in ModalTypeConfig]: ResultModalCard;
};

type ModalResultConfig = {
    [key in ModalTypeConfig]: ResultModalType;
};

export const modalCofig: ModalConfig = {
    [ModalTypeConfig.ERROR_ADD_FEEDBACK]: {
        buttonCloseTitle: 'Закрыть',
        buttonTitle: 'Написать отзыв',
        desciption: 'Что-то пошло не так. Попробуйте ещё раз.',
        title: 'Данные не сохранились',
    },
    [ModalTypeConfig.ERROR_GET_FEEDBACK]: {
        buttonTitle: 'Назад',
        desciption: 'Произошла ошибка, попробуйте ещё раз.',
        title: 'Что-то пошло не так',
    },
    [ModalTypeConfig.SUCCESS_ADD_FEEDBACK]: {
        buttonTitle: 'Отлично',
        title: 'Отзыв успешно опубликован',
    },
};

export const modalResultConfig: ModalResultConfig = {
    [ModalTypeConfig.ERROR_ADD_FEEDBACK]: {
        type: ModalTypeConfig.ERROR_ADD_FEEDBACK,
        status: 'error',
    },
    [ModalTypeConfig.ERROR_GET_FEEDBACK]: {
        type: ModalTypeConfig.ERROR_GET_FEEDBACK,
        status: '500',
    },
    [ModalTypeConfig.SUCCESS_ADD_FEEDBACK]: {
        type: ModalTypeConfig.SUCCESS_ADD_FEEDBACK,
        status: 'success',
    },
};