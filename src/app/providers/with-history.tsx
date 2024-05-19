import { HistoryRouter } from 'redux-first-history/rr6';
import { QueryLoader } from './ui/query-loader';
import { history } from '../store/appStore';

import { AppAlert, ResultModal } from '@features/result-modal';

export function withHistory(component: () => React.ReactNode) {
    return () => (
        <HistoryRouter history={history} basename={import.meta.env.BASE_URL}>
            {component()}
            <QueryLoader />
            <ResultModal />
            <AppAlert />
        </HistoryRouter>
    );
}
