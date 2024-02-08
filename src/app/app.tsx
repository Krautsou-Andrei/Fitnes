/* eslint-disable react-refresh/only-export-components */
import { RouterProvider } from 'react-router-dom';
import { withProviders } from './providers';
import { appRouter } from './routing';

import './index.less';

function App() {
    return <RouterProvider router={appRouter()} />;
}

export default withProviders(App);
