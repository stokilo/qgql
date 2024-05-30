import { ReactNode } from 'react';
import { ButtonContext, Button } from 'react-aria-components';

interface ButtonGroupProps {
    children: ReactNode;
    isDisabled?: boolean;
}

export function ButtonGroup({ children, isDisabled }: ButtonGroupProps): JSX.Element {
    return (
        <div style={{ display: 'flex', gap: 8, marginLeft:10 }}>
            <ButtonContext.Provider value={{ isDisabled }}>
                {children}
            </ButtonContext.Provider>
        </div>
    );
}
