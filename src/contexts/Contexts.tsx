import React, { createContext, ReactNode, useContext } from 'react';
import { UserProvider } from './User';


interface ContextProps {

}

const Context = createContext<ContextProps | undefined>(undefined);

export const ContextsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {


    return (
        <Context.Provider value={{}}>
            <UserProvider>
                {children}
            </UserProvider>
        </Context.Provider>
    );
};

export const useAllContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useAllContext must be used within a UserProvider');
    }
    return context;
};
