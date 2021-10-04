import React, { useEffect, useState } from 'react'
import { Link, useRuntime } from 'vtex.render-runtime'
import { IconHome } from 'vtex.store-icons'

import { Container } from './styles'

const BreadcrumbCustom: React.FC = () => {
  const [paths, setPaths] = useState<string[]>()
  const { navigate } = useRuntime()

  const Capitalize = (s: string) => (s && s[0].toUpperCase() + s.slice(1)) || ''

  const defineUrl = () => {
    const { pathname } = window?.location || {}
    const pathnames = pathname?.split('/')

    const nonEmptyPathnames = pathnames?.filter(item => item !== '')
    const formattedPathnames = nonEmptyPathnames.map(item =>
      Capitalize(item.replaceAll('-', ' '))
    )

    setPaths(formattedPathnames)
  }

  useEffect(() => {
    defineUrl()
  }, [window?.location?.pathname])

  return paths ? (
    <Container>
      <Link to="/">
        <IconHome size={26} />
      </Link>
      {paths[0] && (
        <span>
          <Link
            to={`/${paths[0].replaceAll(' ', '-').toLowerCase()}`}
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()

              navigate({
                to: `/${paths[0].replaceAll(' ', '-').toLowerCase()}`,
              })
            }}
          >
            <p>{paths[0]}</p>
          </Link>
        </span>
      )}
      {paths[1] && (
        <span>
          <Link
            to={`/${paths[0]
              .replaceAll(' ', '-')
              .toLowerCase()}/${paths[1].replaceAll(' ', '-').toLowerCase()}`}
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()

              navigate({
                to: `/${paths[0]
                  .replaceAll(' ', '-')
                  .toLowerCase()}/${paths[1]
                  .replaceAll(' ', '-')
                  .toLowerCase()}`,
              })
            }}
          >
            <p>{paths[1]}</p>
          </Link>
        </span>
      )}
      {paths[2] && (
        <span>
          <Link
            to={`/${paths[0]
              .replaceAll(' ', '-')
              .toLowerCase()}/${paths[1]
              .replaceAll(' ', '-')
              .toLowerCase()}/${paths[2].replaceAll(' ', '-').toLowerCase()}`}
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()

              navigate({
                to: `/${paths[0]
                  .replaceAll(' ', '-')
                  .toLowerCase()}/${paths[1]
                  .replaceAll(' ', '-')
                  .toLowerCase()}/${paths[2]
                  .replaceAll(' ', '-')
                  .toLowerCase()}`,
              })
            }}
          >
            <p>{paths[2]}</p>
          </Link>
        </span>
      )}
    </Container>
  ) : null
}

export default BreadcrumbCustom
