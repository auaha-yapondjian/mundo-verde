import React from 'react'
import SobreNosBanner from './SobreNosBanner'
import SobreNosCarrossel from './SobreNosCarrossel'
import SobreNosImages from './SobreNosImages'

function SobreNos({ textBanner }) {
  return (
    <>
      <SobreNosBanner textBanner={textBanner} />
      <SobreNosCarrossel />
      <SobreNosImages />
    </>
  )
}

export default SobreNos

SobreNos.schema = {
  title: 'Text Banner',
  description: 'Texto do banner principal',
  type: 'object',
  properties: {
    textBanner: {
      type: 'string',
      title: 'textBanner',
      default: 'Este é o nosso mundo',
    },
    lastName: {
      type: 'string',
      title: 'Last name',
    },
  },
}
