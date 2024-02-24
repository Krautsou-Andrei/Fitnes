import { useResultButtonClick } from '@features/result';
import { splitString } from '@shared/lib';
import { ResultPageType } from '@shared/types/app';

type UseResultPageProps = {
    type: ResultPageType;
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
