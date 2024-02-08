import compose from 'compose-function';
import { withStore } from './with-store';

const withProviders = compose(withStore);

export { withProviders };
