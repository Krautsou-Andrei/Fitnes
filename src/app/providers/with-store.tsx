import { Provider } from 'react-redux';

import { store } from '../store/appStore';

export function withStore(component: () => React.ReactNode) {
    return () => <Provider store={store}>{component()}</Provider>;
}
