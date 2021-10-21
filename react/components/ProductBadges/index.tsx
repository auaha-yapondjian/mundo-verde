import React, { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'
import type { ProductTypes } from 'vtex.product-context'

import { Container } from './styles'
import { types } from './types'
import Badge from './Badge'

const ProductBadges: React.FC = () => {
  const { product } = useProduct()
  const [badges, setBadges] = useState<ProductTypes.SpecificationGroup>()
  const [isProduct, setIsProduct] = useState<ProductTypes.Product>()
  const [link, setLink] = useState('')

  const getBadges = () => {
    product?.specificationGroups?.map(item =>
      item.name === 'Dietas Especiais' ? setBadges(item) : false
    )

    product?.properties?.map(item =>
      item.name in types ? setIsProduct(product) : false
    )

    const str = product?.categories[product.categories.length - 1]
    const treatedStr = str?.replaceAll(/\s/g, '-').toLowerCase()
    setLink(treatedStr)
  }

  useEffect(() => {
    getBadges()
  }, [badges])

  return (
    <Container>
      {badges
        ? badges?.specifications.map(item => (
            <Badge
              key={item.name}
              name={item.name}
              link={`${link.replace(
                /.$/,
                ''
              )}?map=category-1,${item.name
                .replaceAll(/\s/g, '-')
                .toLowerCase()}&query=${link}sim&searchState`}
            />
          ))
        : isProduct?.properties.map(item => (
            <Badge
              key={item.name}
              name={item.name}
              link={`${link.replace(
                /.$/,
                ''
              )}?map=category-1,${item.name
                .replaceAll(/\s/g, '-')
                .toLowerCase()}&query=${link}sim&searchState`}
            />
          ))}
    </Container>
  )
}

export default ProductBadges
