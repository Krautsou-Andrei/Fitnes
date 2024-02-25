import { ErrorBoundary } from 'react-error-boundary';

import { AppErrorFallback } from '@shared/ui/app-error-fallback/@ex/with-error-boundary';

type WithErrorBoundaryProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

export function WithErrorBoundary({ children, onClick }: WithErrorBoundaryProps) {
    return (
        <ErrorBoundary FallbackComponent={AppErrorFallback} onReset={onClick}>
            {children}
        </ErrorBoundary>
    );
}
