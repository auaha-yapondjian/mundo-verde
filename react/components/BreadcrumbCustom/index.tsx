import React, { useEffect, useState } from 'react'
import { Link, useRuntime } from 'vtex.render-runtime'
import { IconHome } from 'vtex.store-icons'

import { Container } from './styles'

const BreadcrumbCustom: React.FC = () => {
  const [paths, setPaths] = useState<string[]>()
  const { navigate } = useRuntime()

  const defineUrl = () => {
    const { pathname } = window?.location || {}
    const pathnames = pathname?.split('/')

    const nonEmptyPathnames = pathnames?.filter(item => item !== '')
    const formattedPathnames = nonEmptyPathnames.map(item =>
      item.replaceAll('-', ' ')
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
            to={`/${paths[0].replaceAll(' ', '-')}`}
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()

              navigate({
                to: `/${paths[0].replaceAll(' ', '-')}`,
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
            to={`/${paths[0].replaceAll(' ', '-')}/${paths[1].replaceAll(
              ' ',
              '-'
            )}`}
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()

              navigate({
                to: `/${paths[0].replaceAll(' ', '-')}/${paths[1].replaceAll(
                  ' ',
                  '-'
                )}`,
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
            to={`/${paths[0].replaceAll(' ', '-')}/${paths[1].replaceAll(
              ' ',
              '-'
            )}/${paths[2].replaceAll(' ', '-')}`}
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()

              navigate({
                to: `/${paths[0].replaceAll(' ', '-')}/${paths[1].replaceAll(
                  ' ',
                  '-'
                )}/${paths[2].replaceAll(' ', '-')}`,
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
