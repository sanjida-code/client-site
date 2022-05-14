import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const allContecx = useFirebase();
    return (
        <AuthContext.Provider value={allContecx}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;