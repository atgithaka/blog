import { ReactNode } from 'react';

declare global {
    interface LinkProps {
        URL: string;
        name: string;
    }
    interface ButtonProps extends LinkProps {
        type: 'filled' | 'outlined';
    }
    interface ChildrenProps {
        children: ReactNode;
    }
}

export {};
