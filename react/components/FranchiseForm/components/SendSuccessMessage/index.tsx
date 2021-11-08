import React from 'react'
import { Container } from './styles'

const SendSuccessMessage: React.FC = () => {
  return (
    <Container>
      <strong>Sucesso!</strong>
      <p> Cadastro realizado com sucesso. Obrigado!</p>
    </Container>
  )
}

export default SendSuccessMessage
