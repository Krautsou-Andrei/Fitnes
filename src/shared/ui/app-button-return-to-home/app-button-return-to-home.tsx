import React from 'react';
import { Button } from 'antd';
import { useAppButtonReturnToHome } from './hooks';

type AppButtonReturnToHomeProps = {
    children: React.ReactNode;
};

export function AppButtonReturnToHome({ children }: AppButtonReturnToHomeProps) {
    const { onClick } = useAppButtonReturnToHome();

    return (
        <Button type='primary' onClick={onClick}>
            {children}
        </Button>
    );
}
