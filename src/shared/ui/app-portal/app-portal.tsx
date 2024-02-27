import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type AppPortalProps = {
    children: ReactNode;
    container?: Element | DocumentFragment;
};

export function AppPortal({ children, container = document.body }: AppPortalProps) {
    return createPortal(children, container);
}
