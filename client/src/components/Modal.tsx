import React, { useEffect, useRef, FunctionComponent } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 90%;
  max-width: 500px;
  background: white;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 30px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`

const modalRoot = document.getElementById('modal');

const Modal: FunctionComponent = ({ children }) => {
  const elRef = useRef(document.createElement('div'));

  useEffect(() => {
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<ModalWrapper>{children}</ModalWrapper>, elRef.current);
};

export default Modal;