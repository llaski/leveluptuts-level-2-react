import React from 'react'
import styled from 'styled-components'
import { Portal, absolute } from 'Utilities'
import Icon from './Icon'
import { Card } from './Cards'

const Modal = ({ children, on, toggle }) => {
    return (
        <Portal>
            {on && (
                <ModalWrapper>
                    <Background onClick={toggle} />
                    <ModalCard>
                        <CloseButton onClick={toggle}>
                            <Icon name="close" color="red" />
                        </CloseButton>
                        <div>{children}</div>
                    </ModalCard>
                </ModalWrapper>
            )}
        </Portal>
    )
}

export default Modal

const ModalWrapper = styled.div`
    ${absolute()};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalCard = styled(Card)`
    position: relative;
    z-index: 10;
    min-width: 300px;
    margin-bottom: 100px;
`

const CloseButton = styled.button`
    ${absolute({
        x: 'right',
        val: '5px',
    })};
    background: transparent;
    padding: 10px;
    border: none;
`

const Background = styled.div`
    ${absolute()};
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0);
    opacity: 0.4;
`
