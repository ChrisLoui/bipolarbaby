import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);