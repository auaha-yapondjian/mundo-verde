import React, { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'
import type { ProductTypes } from 'vtex.product-context'
import { Container } from './styles'
import Badge from './Badge'

const ProductBadges: React.FC = () => {
  const { product } = useProduct()
  const [badges, setBadges] = useState<ProductTypes.SpecificationGroup>()

  const getBadges = () => {
    product?.specificationGroups?.map(item =>
      item.name === 'Dietas Especiais' ? setBadges(item) : false
    )
  }

  useEffect(() => {
    getBadges()
  }, [badges])

  return (
    <Container>
      {badges?.specifications.map(item => (
        <Badge name={item.name} />
      ))}
    </Container>
  )
}

export default ProductBadges
