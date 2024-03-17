import { usePageIsEqual } from '@shared/hooks';
import { useMainWidth } from '@shared/hooks/@ex/app-layout';

export function useAppLayout() {
    const { styleCollapsed } = useMainWidth();
    const { isCalendar } = usePageIsEqual();

    return { isCalendar, styleCollapsed };
}
