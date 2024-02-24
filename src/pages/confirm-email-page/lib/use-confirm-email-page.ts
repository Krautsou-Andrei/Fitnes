import { confirmConfig } from '@features/confirm-email/config/confirm-config';

import { SessionStorageConfig } from '@shared/config';
import { useAppMediaQuery } from '@shared/hooks';
import { splitString, wrapSelectedText } from '@shared/lib';
import { TypePage } from '@shared/types/app';

type Props = {
    classNames?: string[];
};

export function useConfirmEmailPage({ classNames }: Props) {
    const { isQueryXS } = useAppMediaQuery();

    const sessionStorageEmail = sessionStorage.getItem(SessionStorageConfig.EMAIL);
    const email = sessionStorageEmail ? sessionStorageEmail : '';

    const title = confirmConfig[TypePage.CONFIRM_EMAIL].title;
    const description = confirmConfig[TypePage.CONFIRM_EMAIL].description(email);

    let className;

    if (!isQueryXS) {
        className = classNames?.[0];
        console.log('className', className);
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
