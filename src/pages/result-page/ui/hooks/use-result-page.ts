import { ResultPageConfig, useResultButtonClick } from '@features/result';
import { splitString } from '@shared/lib';

type UseResultPageProps = {
    type: ResultPageConfig;
    description: string;
};

export function useResultPage({ type, description }: UseResultPageProps) {
    const typeOnClick = useResultButtonClick(type);

    const onClick = () => {
        typeOnClick && typeOnClick();
    };

    const descriptionText = splitString(description);

    return { descriptionText, onClick };
}
