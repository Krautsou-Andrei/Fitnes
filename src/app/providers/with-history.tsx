import { HistoryRouter } from 'redux-first-history/rr6';
import { QueryLoader } from './ui/query-loader';
import { history } from '../store/appStore';

export const withHistory = (component: () => React.ReactNode) => () =>
    (
        <HistoryRouter history={history}>
            {component()}
            <QueryLoader />
        </HistoryRouter>
    );
