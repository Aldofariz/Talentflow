import { createContext, useContext, useState } from 'react';

// 1. Buat Context
const ModalContext = createContext();

// 2. Buat Custom Hook untuk menggunakan Context
export const useModalContext = () => {
    return useContext(ModalContext);
    };

    // 3. Buat Provider untuk membungkus komponen yang membutuhkan state
export const ModalProvider = ({ children }) => {
    // Pindahkan semua state dan fungsi handler ke sini
    const [isOpen, setIsOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add');

    const handleOpen = (mode) => {
        setIsOpen(true);
        setModalMode(mode);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = () => {
        if (modalMode === 'add') {
        console.log('modal mode Add');
        // Tambahkan logika untuk CREATE
        } else {
        console.log('modal mode Edit');
        // Tambahkan logika untuk UPDATE
        }
        setIsOpen(false); // Tutup modal setelah submit
    };

    const value = {
        isOpen,
        modalMode,
        handleOpen,
        handleClose,
        handleSubmit,
    };

    return (
        <ModalContext.Provider value={value}>
        {children}
        </ModalContext.Provider>
    );
    };