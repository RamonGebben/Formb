import React, { useState } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onClose();
      setIsAnimating(false);
    }, 300); // Adjust the timing based on your animation duration
  };

  return (
    <>
      {isOpen && (
        <div
          className={`modal ${
            isAnimating ? "modal--animate-out" : "modal--animate-in"
          }`}
        >
          <div className="modal__content">
            <button className="modal__close-btn" onClick={handleClose}>
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
      {isOpen && <div className="modal__backdrop" onClick={handleClose} />}
    </>
  );
};

export default Modal;
