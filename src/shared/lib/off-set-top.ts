import { ConstantsMediaQuery } from '@shared/config';

export function offSetTop(element: HTMLElement): number {
    const blockRect = element.getBoundingClientRect();
    const blockTop = blockRect.top;

    const distanceToTop = blockTop + ConstantsMediaQuery.APP_TOP_ROW_CALENDAR;
    return distanceToTop;
}
