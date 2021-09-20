import React from 'react'
import { useRuntime } from 'vtex.render-runtime'

import { Link, Container } from './styles'

interface IBadge {
  name: string
  link: string
}

const Badge: React.FC<IBadge> = ({ name, link }) => {
  const { navigate } = useRuntime()

  const changeCategoryTitleName = (nameToChange: string) => {
    document.querySelector(
      '.vtex-search-result-3-x-galleryTitle--layout.t-heading-1'
    ).textContent = nameToChange
  }

  return (
    <Link
      href={`${link}`}
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()

        // changeCategoryTitleName(name)

        navigate({
          to: `${link}`,
        })
      }}
    >
      <Container type={name}>
        <p>{name}</p>
      </Container>
    </Link>
  )
}

export default Badge
