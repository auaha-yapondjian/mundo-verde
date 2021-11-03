import React, { useEffect } from 'react'
import styled from 'styled-components'

interface IsShowProps {
  isShow: boolean
}

const FormModalContainer = styled.section<IsShowProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  z-index: 5000;
  visibility: ${({ isShow }: any) => (isShow ? 'visible' : 'hidden')};
  /* transition: visibility 0.3s; */
`
const FormModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`
const FormModalBox = styled.div<IsShowProps>`
  position: absolute;
  width: 300px;
  min-height: 200px;
  padding: 20px;
  box-sizing: border-box;

  background: white;
  box-shadow: 0 0 3px 0 gray;
  opacity: ${({ isShow }: any) => (isShow ? 1 : 0)};
  transform: ${({ isShow }: any) =>
    isShow ? 'translateY(0)' : 'translateY(-50%)'};
  transition: opacity 0.3s, transform 0.3s;
`
const FormModalCloseButton = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 3px;
    background: black;
  }
  ::before {
    transform: rotate(45deg);
  }
  ::after {
    transform: rotate(-45deg);
  }
`

export const FormModal: React.FC<any> = ({
  modalState,
  currentModalMessageType,
}: any) => {
  const [modalIsShow, setModalIsShow] = modalState

  const closeModalFunction = () => setModalIsShow(false)

  useEffect(() => {
    if (modalIsShow) {
      setTimeout(() => {
        modalIsShow && closeModalFunction()
      }, 6000)
    }
  }, [modalIsShow])

  const messageTypes: any = {
    invalidFields: {
      title: 'Campos invalidos',
      text: 'Campos obrigatórios inválidos, por favor verifique.',
    },
    messageSave: {
      title: 'Formulário enviado!',
      text: 'Seu formulário foi enviado com sucesso!',
    },
    serverError: {
      title: 'Formulário não enviado',
      text:
        'Mensagem não enviada, por favor tente novamente daqui a alguns minutos.',
    },
    aceptComunication: {
      title: 'Formulário não enviado',
      text:
        'Para enviar os dados, é necessário aceitar a comunicação e estar de acordo com a política de privacidade.',
    },
  }

  const selectedMessage =
    messageTypes[currentModalMessageType] || messageTypes.serverError

  return (
    <FormModalContainer isShow={modalIsShow}>
      <FormModalBackground onClick={closeModalFunction} />
      <FormModalBox isShow={modalIsShow}>
        <FormModalCloseButton onClick={closeModalFunction} />
        <h3>{selectedMessage.title}</h3>
        <p>{selectedMessage.text}</p>
      </FormModalBox>
    </FormModalContainer>
  )
}
