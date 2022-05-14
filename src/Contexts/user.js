import { useState, createContext } from 'react';

export const UserContext = createContext({});

export default function UserProvider({ children }) {

    const [observacao, setObservacao] = useState('');
    const [react, setReact] = useState('React');
    const [angular, setAngular] = useState('Angular');
    const [vue, setVue] = useState('Vue');
    const [isVisible, setIsVisible] = useState(false);

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
                isVisible,
                setIsVisible,
            }}>
            {children}
        </UserContext.Provider>
    )
}
