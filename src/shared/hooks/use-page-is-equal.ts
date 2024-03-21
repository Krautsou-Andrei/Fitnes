import { useLocation } from 'react-router';
import { PathConfig } from '@shared/config';

export function usePageIsEqual() {
    const { pathname } = useLocation();
    const isCalendar = pathname === PathConfig.CALENDAR;
    const isFeedback = pathname === PathConfig.FEEDBACKS;
    const isProfile = pathname === PathConfig.PROFILE;

    return { isCalendar, isFeedback, isProfile };
}
