import { LayoutConfig } from '@shared/config';
import { usePageIsEqual } from '@shared/hooks';

export function useAppHeader() {
    const { isCalendar, isHome, isProfile, isSettings } = usePageIsEqual();

    const isBreadcrumb = !isProfile && !isSettings;

    let title = (
        <>
            <div>{LayoutConfig.TITLE_ONE}</div>
            <div>{LayoutConfig.TITLE_TWO}</div>
        </>
    );

    if (isProfile) {
        title = <>{LayoutConfig.TITLE_PROFILE}</>;
    }

    if (isSettings) {
        title = <>{LayoutConfig.TITLE_SETTING}</>;
    }

    return { isBreadcrumb, isCalendar, isHome, isProfile, isSettings, title };
}
