import { UploadFileStatus } from 'antd/lib/upload/interface';

export const initialAvatarError = {
    uid: '2',
    name: 'image.png',
    status: 'error' as UploadFileStatus,
};

export const enum ListTypeConfig {
    PICTURE = 'picture',
    PICTIRE_CARD = 'picture-card',
}

export const enum AcceptConfig {
    IMAGE = 'image/*',
}

export const enum MaxCountConfig {
    ONE = 1,
}

export const enum AppInputUploadAvatarConfig {
    UPLOAD_BUTTON_TEXT = 'Загрузить фото профиля',
    UPLOAD_STATUS_LOADING = 'Загружаем',
}
