import { AppLoader } from '@shared/ui';
import { Suspense } from 'react';

type WithLoaderProps = {
    children: React.ReactNode;
};

export const WithLoader = ({ children }: WithLoaderProps) => {
    return <Suspense fallback={<AppLoader />}>{children}</Suspense>;
};
