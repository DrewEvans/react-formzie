import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from 'styled-components';

const closeCross = <FontAwesomeIcon className='modal-cross' icon={faTimes} />;

const ModalWrapper = styled.div`
background-color: #7a7a7a9c;
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
`
const modalAnimation = keyframes`
0% {
    opacity: 0;
    top: -50%;
  }

  100% {
    opacity: 1;
    top: 0;
  }
`

const ModalContainer = styled.div`
opacity: 1;
background: whitesmoke;
border-radius: 16px;
display: flex;
flex-direction: column;
width: calc(15% + 15rem);
height: auto;
position: relative;
animation: ${modalAnimation} ease 0.4s;
`
const ModalCross = styled.div`
display: flex;
font-size: 1.5em;
padding: 0.25em 0.5em;
color: black;
position: relative;
background-color: transparent;
border: none;
align-self: flex-end;
justify-self: self-end;
cursor: pointer;
`
const ModalContent = styled.div`
padding: 0.5em 1.5em 2em 1.5em;
display: flex;
flex-wrap: wrap;
border: none;
align-self: flex-start;
`

interface Props {
    children: JSX.Element,
    onClick: any
}

const Modal = React.memo(({onClick, children}: Props) => {
    return (
        <ModalWrapper className='wrapper' onClick={onClick}>
            <ModalContainer className='modal'>
                <ModalCross 
                className="modal-cross" 
                onClick={onClick} 
                aria-label="close contact form"
                >
                    {closeCross}
                </ModalCross>
                <ModalContent className='modal-content'>{children}</ModalContent>
            </ModalContainer>
        </ModalWrapper>
    )
})

export {Modal}
