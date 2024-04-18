import { useLocation } from 'react-router';
import { PathConfig } from '@shared/config';

export function usePageIsEqual() {
    const { pathname } = useLocation();
    const isAchievements = pathname === PathConfig.ACHIEVEMENTS;
    const isCalendar = pathname === PathConfig.CALENDAR;
    const isFeedback = pathname === PathConfig.FEEDBACKS;
    const isHome = pathname === PathConfig.HOME;
    const isProfile = pathname === PathConfig.PROFILE;
    const isSettings = pathname === PathConfig.SETTINGS;
    const isTrainings = pathname === PathConfig.TRAINING;

    return { isAchievements, isCalendar, isFeedback, isHome, isProfile, isSettings, isTrainings };
}
