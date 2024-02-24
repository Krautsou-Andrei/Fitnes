import { ReactElement } from 'react';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';

import { HistoryStateConfig, PathConfig } from '@shared/config';

type ResponseGuardProps = {
    children: ReactElement;
};

export function ResponseGuard({ children }: ResponseGuardProps) {
    const { pathname, state } = useLocation();

    if (pathname.includes(PathConfig.AUTH) || pathname.includes(PathConfig.RESULT)) {
        if (state?.result === HistoryStateConfig.RESULT) {
            return children;
        }
        if (state?.forgot === HistoryStateConfig.CONFIRM_PAGE_STEP_ONE) {
            return children;
        }
        if (state?.forgot === HistoryStateConfig.CONFIRM_PAGE_STEP_TWO) {
            return children;
        }
    }

    return <Navigate to={PathConfig.AUTH} />;
}
