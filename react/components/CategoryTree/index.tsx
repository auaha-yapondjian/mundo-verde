import React, { useEffect, useState } from 'react'
import { Loading } from 'vtex.render-runtime'
import axios from 'axios'

import { Container } from './styles'

interface IResponseChildren {
  id: number
  name: string
  url: string
}

interface IResponse {
  name: string
  children: IResponseChildren[]
}

const CategoryTree: React.FC = () => {
  const [categories, setCategories] = useState<IResponse>()

  const getCategoryTree = async (department: string) => {
    const { data } = await axios.get(
      '/api/catalog_system/pub/category/tree/1',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )

    data.map(
      (item: IResponse) =>
        item.name.toLowerCase() === department && setCategories(item)
    )
  }

  const defineDepartment = () => {
    const { pathname } = window?.location || {}
    const [, windowDepartment] = pathname?.split('/')
    const formattedDepartment = windowDepartment.replaceAll('-', ' ')

    getCategoryTree(formattedDepartment)
  }

  useEffect(() => {
    defineDepartment()
  }, [window?.location?.pathname])

  return categories ? (
    <Container>
      <strong>Categorias</strong>
      <ul>
        {categories.children.map(item => (
          <li key={item.id}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </Container>
  ) : (
    <Loading />
  )
}

export default CategoryTree
