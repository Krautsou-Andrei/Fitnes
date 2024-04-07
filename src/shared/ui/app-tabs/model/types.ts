import { ReactNode } from 'react';

export type ItemsTabs = {
    key: string;
    label: string | ReactNode;
    children?: ReactNode;
    badge?: boolean;
};
