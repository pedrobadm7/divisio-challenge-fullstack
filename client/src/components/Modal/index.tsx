import React from 'react'
import * as S from './styles'
import ReactDOM from 'react-dom'
import closeIcon from '../../static/images/close.png'

export interface ModalProps {
  isShown: boolean
  hide: () => void
  modalContent: JSX.Element
  render?: string
  headerText?: string
}

const Modal = ({ isShown, hide, modalContent }: ModalProps) => {
  const modal = (
    <React.Fragment>
      <S.Backdrop />
      <S.Wrapper>
        <S.StyledModal>
          <S.Header>
            <S.HeaderText />
            <S.CloseButton onClick={hide}>
              <img src={closeIcon} />
            </S.CloseButton>
          </S.Header>
          <S.Content>{modalContent}</S.Content>
        </S.StyledModal>
      </S.Wrapper>
    </React.Fragment>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}

export default Modal
