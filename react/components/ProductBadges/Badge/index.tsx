import React from 'react'
import { Container } from './styles'

interface IBadge {
  name: string
}

const Badge: React.FC<IBadge> = ({ name }) => {
  return (
    <Container type={name}>
      <p>{name}</p>
    </Container>
  )
}

export default Badge
