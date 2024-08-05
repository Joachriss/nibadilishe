import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext({});


export function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (!user) {
            axios.get('http://127.0.0.1:5000/api/profile').then(({ data }) => {
                setUser(data);
            })
        }
    }, []);
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}