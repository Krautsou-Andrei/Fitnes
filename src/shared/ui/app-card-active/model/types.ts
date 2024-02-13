import { ReactNode } from 'react';

export type CardActive = {
    id: number;
    title: string;
    button: {
        icon: ReactNode;
        title: string;
        href: string;
    };
};
