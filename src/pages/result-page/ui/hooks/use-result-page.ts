import { useLocation } from 'react-router-dom';
import { resultConfig } from '@pages/result-page/config/result-config';
import { ResultPageConfig, useResultButtonClick } from '@features/result';
import { splitString } from '@shared/lib';

export function useResultPage() {
    const location = useLocation();
    const lastPartUrl = location.pathname.split('/').at(-1);
    const type = lastPartUrl as ResultPageConfig;

    const typeOnClick = useResultButtonClick(type);

    const onClick = () => {
        typeOnClick && typeOnClick();
    };

    const description = splitString(resultConfig[type].description);

    return { description, onClick, type };
}
