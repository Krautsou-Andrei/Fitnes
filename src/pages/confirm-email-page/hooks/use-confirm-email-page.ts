import { confirmConfig, ConfirmPageConfig } from '@features/confirm-email';

import { SessionStorageConfig } from '@shared/config';
import { useAppMediaQuery } from '@shared/hooks';
import { getSessionStorage, splitString, wrapSelectedText } from '@shared/lib';

type UseConfirmEmailPageProps = {
    classNames?: string[];
};

export function useConfirmEmailPage({ classNames }: UseConfirmEmailPageProps) {
    const { isQueryXS } = useAppMediaQuery();

    const email = getSessionStorage(SessionStorageConfig.EMAIL);

    const title = confirmConfig[ConfirmPageConfig.CONFIRM_EMAIL].title;
    const description = confirmConfig[ConfirmPageConfig.CONFIRM_EMAIL].description(email);

    let className;

    if (!isQueryXS) {
        className = classNames?.[0];
    } else {
        className = classNames?.join(' ');
    }

    const cardTitle = splitString(title);
    const cardDescription = wrapSelectedText({
        text: description,
        searchString: email,
        className: className,
    });

    return { cardTitle, cardDescription };
}
