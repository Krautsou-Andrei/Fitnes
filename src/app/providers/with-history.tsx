import { HistoryRouter } from 'redux-first-history/rr6';
import { QueryLoader } from './ui/query-loader';
import { history } from '../store/appStore';

import { ResultModal } from '@features/result-modal';

export function withHistory(component: () => React.ReactNode) {
    return () => (
        <HistoryRouter history={history}>
            {component()}
            <QueryLoader />
            <ResultModal />
        </HistoryRouter>
    );
}
