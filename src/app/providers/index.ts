import compose from 'compose-function';
import { withConfigAnt } from './with-config-ant';
import { withStore } from './with-store';
import { withHistory } from './with-history';

const withProviders = compose(withConfigAnt, withStore, withHistory);

export { withProviders };
