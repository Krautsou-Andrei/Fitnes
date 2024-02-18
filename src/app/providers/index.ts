import compose from 'compose-function';
import { withStore } from './with-store';
import { withHistory } from './with-history';
import { WithLoader } from './with-loader';

const withProviders = compose(withStore, withHistory);

export { withProviders, WithLoader };
