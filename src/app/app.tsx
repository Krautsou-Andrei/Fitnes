/* eslint-disable react-refresh/only-export-components */

import { withProviders } from './providers';
import { AppRouter } from './routing/appRouter';

import './index.less';

function App() {
    return <AppRouter />;
}
export default withProviders(App);
