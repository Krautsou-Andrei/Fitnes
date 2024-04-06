export const enum ConstantsMediaQuery {
    COLLAPSED = '64',
    COLLAPSED_MD = '0',
    COLLAPSED_NO = '208',
    COLLAPSED_NO_MD = '106',

    XS = 480,
    MD = 768,
    APP_TABLET = 834,
    APP_TOP_ROW_CALENDAR = 60,
}

export const enum Size {
    SIZE_S = 12,
    SIZE_8_XL = 42,
}

export const enum Gap {
    GAP_3XS = 4,
    GAP_XS = 8,
    GAP_2S = 10,
    GAP_S = 12,
    GAP_2M = 14,
    GAP_M = 16,
    GAP_L = 20,
    GAP_XL = 24,
}

export const enum COL {
    COL_S = 12,
    COL_XL = 24,
    COL_8_XL = 42,
}

export const STYLES = {
    BACKGROUND_BLURE: 'rgba(121, 156, 212, 0.1)',
    BACKGROUND_TOOLTIP: '#000000',
    BLURE: 'blur(5px)',
    COLLAPSED: {
        marginLeft: `${ConstantsMediaQuery.COLLAPSED}px`,
        transition: 'margin-left 0.2s ease',
    },
    DATE_PICKER_COLOR: '#BFBFBF',
    ICON_COLOR_ERROR_LIST: '#2F54EB',
    ICON_COLOR_SUCCESS_UPDATE_USER: '#52C41A',
    NO_COLLAPSED: {
        marginLeft: `${ConstantsMediaQuery.COLLAPSED_NO}px`,
        transition: 'margin-left 0.2s ease',
    },
    HEIGHT_EMPTY_TRAINIG_MODAL: 32,
    SIZE_ICON_UPLOAD_USER: '18px',
    STROKE_WIDT_UPLOAD_USER_IMAGE: 4,
    WIDTH_TOOLTIP: '147px',
};

export const enum Width {
    TRAINING_MODAL = 264,
}
