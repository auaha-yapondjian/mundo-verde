import React, { useEffect, useState } from 'react'
import { useRuntime, Loading } from 'vtex.render-runtime'
import axios from 'axios'

import { Container } from './styles'

interface SubCategory {
  id: number
  name: string
  url: string
}

interface IResponseChildren {
  id: number
  name: string
  url: string
  children: SubCategory[]
}

interface IResponse {
  name: string
  children: IResponseChildren[]
}

const SubCategoryTree: React.FC = () => {
  const { navigate } = useRuntime()
  const [subCategories, setSubCategories] = useState<IResponseChildren>()

  const getCategoryTree = async (department: string, category: string) => {
    const { data } = await axios.get(
      '/api/catalog_system/pub/category/tree/2',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )

    data.map((item: IResponse) => {
      if (item.name.toLocaleLowerCase() === department) {
        item.children.map(
          categoryItem =>
            categoryItem.name
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase() === category && setSubCategories(categoryItem)
        )
      }
    })
  }

  const defineDepartment = () => {
    const { pathname } = window?.location || {}
    const [, windowDepartment, windowCategory] = pathname?.split('/')
    const formattedDepartment = windowDepartment.replaceAll('-', ' ')
    const formattedCategory = windowCategory.replaceAll('-', ' ')

    getCategoryTree(formattedDepartment, formattedCategory)
  }

  useEffect(() => {
    defineDepartment()
  }, [window?.location?.pathname])

  return subCategories ? (
    <Container>
      <strong>Subcategorias</strong>
      <ul>
        {subCategories.children.map(item => (
          <li key={item.id}>
            <a
              href={item.url}
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                const [
                  ,
                  ,
                  ,
                  department,
                  category,
                  subcategory,
                ] = item.url.split('/')

                navigate({
                  to: `/${department}/${category}/${subcategory}`,
                })
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  ) : (
    <Loading />
  )
}

export default SubCategoryTree
