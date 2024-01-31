import React, { createContext, ReactNode, useContext } from 'react';
import { storage } from '../lib/storage';

export interface UserProps {
    image: string;
    name: string;
    email: string;
}

interface UserContextProps {
    setUser: (value: UserProps) => void;
    getUser: () => UserProps
    userLogout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {


    const setUser = ({ email, image, name }: UserProps) => {
        storage.set('@user', JSON.stringify({ email, image, name }))
    }

    const getUser = (): UserProps => {
        const user = storage.getString('@user')

        return JSON.parse(user || '[]')
    }

    const userLogout = () => {
        storage.delete('@user')
    }

    return (
        <UserContext.Provider value={{ setUser, getUser, userLogout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
