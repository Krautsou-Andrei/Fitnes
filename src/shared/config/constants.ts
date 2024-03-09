export const enum ConstantsMediaQuery {
    COLLAPSED = '64',
    COLLAPSED_MD = '0',
    COLLAPSED_NO = '208',
    COLLAPSED_NO_MD = '106',

    XS = 480,
    MD = 768,
    APP_TABLET = 834,
}

export const enum Gap {
    GAP_M = 16,
    GAP_L = 20,
    GAP_XL = 24,
}

export const enum COL {
    COL_XL = 24,
    COL_8_XL = 42,
}

export const STYLES = {
    BACKGROUND_BLURE: 'rgba(121, 156, 212, 0.1)',
    BLURE: 'blur(5px)',
    COLLAPSED: {
        marginLeft: `${ConstantsMediaQuery.COLLAPSED}px`,
        transition: 'margin-left 0.2s ease',
    },

    NO_COLLAPSED: {
        marginLeft: `${ConstantsMediaQuery.COLLAPSED_NO}px`,
        transition: 'margin-left 0.2s ease',
    },

    HEIGHT_EMPTY_TRAINIG_MODAL: 32,
};

export const enum Width {
    TRAINING_MODAL = 264,
}
