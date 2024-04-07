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
    [ModalTypeConfig.ERROR_ADD_IMAGE]: {
        buttonTitle: 'Закрыть',
        desciption: 'Выберите файл размером менее 5 МБ.',
        title: 'Файл слишком большой',
    },
    [ModalTypeConfig.ERROR_ADD_TRAINING]: {
        buttonTitle: 'Закрыть',
        desciption: 'Придётся попробовать ещё раз',
        title: 'При сохранении данных произошла ошибка',
    },
    [ModalTypeConfig.ERROR_GET_FEEDBACK]: {
        buttonTitle: 'Назад',
        desciption: 'Произошла ошибка, попробуйте ещё раз.',
        desciptionMobile: 'Произошла ошибка,\n попробуйте ещё раз.',
        title: 'Что-то пошло не так',
    },
    [ModalTypeConfig.ERROR_GET_TRANING]: {
        buttonTitle: 'Назад',
        desciption: 'Произошла ошибка, попробуйте ещё раз.',
        desciptionMobile: 'Произошла ошибка,\n попробуйте ещё раз.',
        title: 'Что-то пошло не так',
    },
    [ModalTypeConfig.ERROR_GET_TRANING_LIST]: {
        buttonTitle: 'Обновить',
        desciption: 'Попробуйте ещё раз.',
        title: 'При открытии данных\n произошла ошибка',
    },
    [ModalTypeConfig.ERROR_GET_USER_JOINT_TRAINING_LIST]: {
        buttonTitle: 'Обновить',
        desciption: 'Попробуйте ещё раз.',
        title: 'При открытии данных\n произошла ошибка',
    },
    [ModalTypeConfig.ERROR_GET_USER_JOINT_TRAINING_LIST_BEST]: {
        buttonTitle: 'Обновить',
        desciption: 'Попробуйте ещё раз.',
        title: 'При открытии данных\n произошла ошибка',
    },
    [ModalTypeConfig.ERROR_UPDATE_USER]: {
        buttonTitle: 'Закрыть',
        desciption: 'Придётся попробовать ещё раз',
        title: 'При сохранении данных произошла ошибка',
    },
    [ModalTypeConfig.SUCCESS_ADD_FEEDBACK]: {
        buttonTitle: 'Отлично',
        title: 'Отзыв успешно опубликован',
    },
    [ModalTypeConfig.SUCCESS_BUY_TARIFF]: {
        buttonTitle: 'Не пришло письмо? Проверьте папку Спам.',
        descriptionEmail: (email) =>
            ` Мы отправили инструкцию для оплаты вам на\n e-mail ${email}. После подтверждения оплаты войдите\n вприложение заново.`,
        title: 'Чек для оплаты у вас на почте',
    },
    [ModalTypeConfig.SUCCESS_CREATE_WORKOUT]: {
        buttonTitle: 'Отлично',
        title: 'Новая тренировка успешно добавлена',
    },
    [ModalTypeConfig.SUCCESS_UPDATE_USER]: {
        buttonTitle: 'Отлично',
        title: 'Данные профиля успешно обновлены',
    },
    [ModalTypeConfig.SUCCESS_UPDATE_WORKOUT]: {
        buttonTitle: 'Отлично',
        title: 'Тренировка успешно обновлена',
    },
};

export const modalResultConfig: ModalResultConfig = {
    [ModalTypeConfig.ERROR_ADD_FEEDBACK]: {
        type: ModalTypeConfig.ERROR_ADD_FEEDBACK,
        status: 'error',
    },
    [ModalTypeConfig.ERROR_ADD_IMAGE]: {
        type: ModalTypeConfig.ERROR_ADD_IMAGE,
        status: 'error',
    },
    [ModalTypeConfig.ERROR_ADD_TRAINING]: {
        type: ModalTypeConfig.ERROR_ADD_TRAINING,
        status: 'error',
    },
    [ModalTypeConfig.ERROR_GET_FEEDBACK]: {
        type: ModalTypeConfig.ERROR_GET_FEEDBACK,
        status: '500',
    },
    [ModalTypeConfig.ERROR_GET_TRANING]: {
        type: ModalTypeConfig.ERROR_GET_TRANING,
        status: '500',
    },
    [ModalTypeConfig.ERROR_GET_TRANING_LIST]: {
        type: ModalTypeConfig.ERROR_GET_TRANING_LIST,
        status: '500',
    },
    [ModalTypeConfig.ERROR_GET_USER_JOINT_TRAINING_LIST]: {
        type: ModalTypeConfig.ERROR_GET_USER_JOINT_TRAINING_LIST,
        status: '500',
    },
    [ModalTypeConfig.ERROR_GET_USER_JOINT_TRAINING_LIST_BEST]: {
        type: ModalTypeConfig.ERROR_GET_USER_JOINT_TRAINING_LIST_BEST,
        status: '500',
    },
    [ModalTypeConfig.ERROR_UPDATE_USER]: {
        type: ModalTypeConfig.ERROR_UPDATE_USER,
        status: 'error',
    },
    [ModalTypeConfig.SUCCESS_ADD_FEEDBACK]: {
        type: ModalTypeConfig.SUCCESS_ADD_FEEDBACK,
        status: 'success',
    },
    [ModalTypeConfig.SUCCESS_BUY_TARIFF]: {
        type: ModalTypeConfig.SUCCESS_BUY_TARIFF,
        status: 'success',
    },
    [ModalTypeConfig.SUCCESS_CREATE_WORKOUT]: {
        type: ModalTypeConfig.SUCCESS_CREATE_WORKOUT,
        status: 'success',
    },
    [ModalTypeConfig.SUCCESS_UPDATE_USER]: {
        type: ModalTypeConfig.SUCCESS_UPDATE_USER,
        status: 'success',
    },
    [ModalTypeConfig.SUCCESS_UPDATE_WORKOUT]: {
        type: ModalTypeConfig.SUCCESS_UPDATE_WORKOUT,
        status: 'success',
    },
};
