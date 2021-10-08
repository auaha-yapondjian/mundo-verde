import React from 'react'
import { useProduct } from 'vtex.product-context'

const ProductImage: React.FC = () => {
  const { product } = useProduct()

  return (
    <img
      src={product.items[0].images[product.items[0].images.length - 1].imageUrl}
      alt="Informações nutricionais"
    />
  )
}

export default ProductImage
