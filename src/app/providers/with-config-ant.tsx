import { ConfigProvider } from 'antd';
import moment from 'moment';

import 'moment/locale/ru';

moment.locale('ru', {
    week: {
        dow: 1,
    },
});

export function withConfigAnt(component: () => React.ReactNode) {
    return () => <ConfigProvider >{component()}</ConfigProvider>;
}
