import { ReactNode } from 'react';

export type CardText = {
    id: number;
    title: string;
    description?: string[];
};

export type CardActive = {
    id: number;
    title: string;
    button: {
        icon: ReactNode;
        title: string;
        href: string;
    };
};
