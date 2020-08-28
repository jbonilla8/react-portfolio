import React from 'react';
import styled from 'styled-components';

const Modal = (props) => {
  
  return (
    <ModalContainer showModal={props.showModal}>
      <ModalContent>
          <p>Text here</p>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
    display: ${props => (props.showModal ? 'flex' : 'none')};
    background: red;
`;

const ModalContent = styled.div`
    color: black;
`;

