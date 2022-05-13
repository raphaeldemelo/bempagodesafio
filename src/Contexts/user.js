import { useState, createContext } from 'react';

export const UserContext = createContext({});

export default function UserProvider({ children }) {

    const [observacao, setObservacao] = useState('');
    const [react, setReact] = useState('React');
    const [angular, setAngular] = useState('Angular');
    const [vue, setVue] = useState('Vue');

    return (
        <UserContext.Provider
            value={{
                observacao,
                setObservacao,
                react,
                setReact,
                angular,
                setAngular,
                vue,
                setVue,
            }}>
            {children}
        </UserContext.Provider>
    )
}
