export interface SpritesMap {
    app: 'exit';
    layout: 'logo-big' | 'logo-smal';
    result: 'error_email';
    review: 'star' | 'star_active';
}
export const SPRITES_META: {
    app: Array<'exit'>;
    layout: Array<'logo-big' | 'logo-smal'>;
    result: Array<'error_email'>;
    review: Array<'star' | 'star_active'>;
} = {
    app: ['exit'],
    layout: ['logo-big', 'logo-smal'],
    result: ['error_email'],
    review: ['star', 'star_active'],
};
