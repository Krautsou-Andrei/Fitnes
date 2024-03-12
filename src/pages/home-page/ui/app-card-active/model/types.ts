import { ButtonLink } from '@shared/types/app';

export type CardActive = {
    id: number;
    title: string;
    button: ButtonLink;
    dataTestId?: string;
};
