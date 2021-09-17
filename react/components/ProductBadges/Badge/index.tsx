import React from 'react'
import { useRuntime } from 'vtex.render-runtime'

import DepartmentTitle from './DepartmentTitle'
import { Link, Container } from './styles'

interface IBadge {
  name: string
  link: string
}

const Badge: React.FC<IBadge> = ({ name, link }) => {
  const { navigate } = useRuntime()

  return (
    <Link
      href={`${link}`}
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()

        navigate({
          to: `${link}`,
        })

        DepartmentTitle({ name })
      }}
    >
      <Container type={name}>
        <p>{name}</p>
      </Container>
    </Link>
  )
}

export default Badge
