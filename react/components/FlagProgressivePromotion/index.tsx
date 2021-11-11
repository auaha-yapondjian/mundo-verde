import React from 'react'
import { useProduct } from 'vtex.product-context'
import { Link, useRuntime } from 'vtex.render-runtime'

import './styles'

interface IFlagDiscount {
  discount: string
}

const TagComponent: React.FC<IFlagDiscount> = ({ discount }) => {
  const { navigate } = useRuntime()

  return (
    <Link
      to={discount}
      className="bf-flag-container"
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()

        navigate({
          to: `/${discount}`,
        })
      }}
    ></Link>
  )
}

const FlagProgressivePromotion = () => {
  const { product } = useProduct()

  const productClusterHighlight = product?.clusterHighlights || []

  const targetHighlightId: Record<string, any> = {
    2229: 'desconto-progressivo-ate-50',
    2230: 'desconto-progressivo-ate-40',
    2231: 'desconto-progressivo-ate-30',
    2233: 'desconto-progressivo-ate-25',
  }

  return productClusterHighlight?.map(highlight => {
    const highlightExists = targetHighlightId[highlight.id]
    return (
      highlightExists && (
        <TagComponent
          key={highlight.id}
          discount={targetHighlightId[highlight.id]}
        />
      )
    )
  })
}

export default FlagProgressivePromotion
