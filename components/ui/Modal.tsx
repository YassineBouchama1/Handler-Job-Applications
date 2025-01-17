import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};


// setting for model 
const modalVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.2,
            type: "spring",
            stiffness: 40
        }
    },
    exit: {
        y: "80vh",
        opacity: 0,
        transition: {
            duration: 0.2
        }
    },
};



const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {



    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => onClose()}
                    className="fixed  inset-0 bg-gray-500 bg-opacity-75 overflow-y-auto h-screen flex justify-center items-center z-[999]"
                >
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                        className="self-center w-full md:w-2/3 lg:w-1/3  rounded-t-md shadow-sm p-4  mx-auto z-[999]"
                    >
                        {children}

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
