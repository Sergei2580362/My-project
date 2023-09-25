import React from "react";
import { createPortal } from "react-dom";
import { ModalBackdrop, ModalContent, ModalWrapper, ButtonContainer, ModalText } from "./index.style";


export { ModalContent, ModalText, ButtonContainer } from './index.style';
export const Modal = ({ children, isOpen, onClose }) => {

  if (!isOpen) {
    return null;
  }
  
  return createPortal(
    <ModalWrapper id="delete-row-modal">
      <ModalContent>
        {children}
        <ModalText>{children}</ModalText>
        <ButtonContainer>{children}</ButtonContainer>
      </ModalContent>
      <ModalBackdrop onClick={onClose}/>
    </ModalWrapper>,
    document.body
  );
};
