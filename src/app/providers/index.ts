import compose from 'compose-function';
import { withStore } from './with-store';
import { withHistory } from './with-history';

const withProviders = compose(withStore, withHistory);

export { withProviders };
