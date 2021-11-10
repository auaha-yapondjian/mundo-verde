import { useState } from 'react'
import React from 'react'
import { useProduct } from 'vtex.product-context'

import './styles'

const TagComponent = ({ discount }) => {
  return (
    <div className="bf-flag-container">
      <p className="bf-flag-text">DESCONTO PROGRESSIVO</p>
    </div>
  )
}

function FlagProgressivePromotion() {
  const { product } = useProduct()

  const productClusterHighlight = product?.clusterHighlights || []

  const targetHighlightId = {
    2229: '50%',
    2230: '40%',
    2231: '30%',
    2233: '25%',
  }
  UHEUHEUEHE
  console.log(product)

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
