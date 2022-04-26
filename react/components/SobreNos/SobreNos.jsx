import React from 'react'
import SobreNosBanner from './SobreNosBanner'
import SobreNosCarrossel from './SobreNosCarrossel'
import SobreNosImages from './SobreNosImages'

function SobreNos({
  textBanner,
  imageBanner,
  titleOfCarroussel,
  carrosselItemTitle1,
  carrosselItemText1,
  carrosselItemTitle2,
  carrosselItemText2,
  carrosselItemTitle3,
  carrosselItemText3,
  carrosselItemTitle4,
  carrosselItemText4,
  titleOfImages,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  titleSecondBanner,
  textSecondBanner,
}) {
  return (
    <>
      <SobreNosBanner
        textBanner={textBanner}
        imageBanner={imageBanner}
        titleSecondBanner={titleSecondBanner}
        textSecondBanner={textSecondBanner}
      />
      <SobreNosCarrossel
        carrosselItemTitle1={carrosselItemTitle1}
        carrosselItemText1={carrosselItemText1}
        carrosselItemTitle2={carrosselItemTitle2}
        carrosselItemText2={carrosselItemText2}
        carrosselItemTitle3={carrosselItemTitle3}
        carrosselItemText3={carrosselItemText3}
        carrosselItemTitle4={carrosselItemTitle4}
        carrosselItemText4={carrosselItemText4}
        titleOfCarroussel={titleOfCarroussel}
      />
      <SobreNosImages
        titleOfImages={titleOfImages}
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
        image5={image5}
        image6={image6}
        image7={image7}
        image8={image8}
        image9={image9}
        image10={image10}
        image11={image11}
        image12={image12}
      />
    </>
  )
}

export default SobreNos

SobreNos.schema = {
  title: 'Sobre Nos',
  description: 'Texto do banner principal',
  type: 'object',
  properties: {
    textBanner: {
      type: 'string',
      title: 'Texto do Banner',
      default: 'Este é o nosso mundo',
    },
    imageBanner: {
      type: 'string',
      title: 'Imagem do Banner',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    titleSecondBanner: {
      type: 'string',
      title: 'Título do segundo Banner',
      default: 'Este é o nosso mundo',
    },
    textSecondBanner: {
      type: 'string',
      title: 'Texto do segundo Banner',
      default: 'Este é o nosso mundo',
    },
    titleOfCarroussel: {
      type: 'string',
      title: 'Título do Carrossel',
      default: 'Lorem Ipsum',
    },
    carrosselItemTitle1: {
      type: 'string',
      title: 'Título do tem 1 do Carrossel',
      default: 'Lorem Ipsum',
    },
    carrosselItemText1: {
      type: 'string',
      title: 'Texto do tem 1 do Carrossel',
      default: 'Lorem Ipsum',
    },
    carrosselItemTitle2: {
      type: 'string',
      title: 'Título do tem 2 do Carrossel',
      default: 'Lorem Ipsum',
    },
    carrosselItemText2: {
      type: 'string',
      title: 'Texto do tem 2 do Carrossel',
      default: 'Lorem Ipsum',
    },
    carrosselItemTitle3: {
      type: 'string',
      title: 'Título do tem 3 do Carrossel',
      default: 'Lorem Ipsum',
    },
    carrosselItemText3: {
      type: 'string',
      title: 'Texto do tem 3 do Carrossel',
      default: 'Lorem Ipsum',
    },
    carrosselItemTitle4: {
      type: 'string',
      title: 'Título do tem 4 do Carrossel',
      default: 'Lorem Ipsum',
    },
    carrosselItemText4: {
      type: 'string',
      title: 'Texto do tem 4 do Carrossel',
      default: 'Lorem Ipsum',
    },
    titleOfImages: {
      type: 'string',
      title: 'Título do bloco de imagens',
      default: 'Lorem Ipsum',
    },
    image1: {
      title: 'Primeira Imagem',
      type: 'string',
      default: 'https://www.mundoverde.com.br/',
    },
    image2: {
      title: 'Segunda Imagem',
      type: 'string',
      default: 'https://www.mundoverde.com.br/',
    },
    image3: {
      title: 'Terceira Imagem',
      type: 'string',
      default: 'https://www.mundoverde.com.br/',
    },
    image4: {
      title: 'Quarta Imagem',
      type: 'string',
      default: 'https://www.mundoverde.com.br/',
    },
    image5: {
      title: 'Quinta Imagem',
      type: 'string',
      default: 'https://www.mundoverde.com.br/',
    },
    image6: {
      title: 'Sexta Imagem',
      type: 'string',
      default: 'https://www.mundoverde.com.br/',
    },
    image7: {
      title: 'Sétima Imagem',
      type: 'string',
      default: 'https://www.mundoverde.com.br/',
    },
    image8: {
      title: 'Oitava Imagem',
      type: 'string',
      default: 'https://www.mundoverde.com.br/',
    },
    image9: {
      title: 'Nona Imagem',
      type: 'string',
      default: 'https://www.mundoverde.com.br/',
    },
    image10: {
      title: 'Décima Imagem',
      type: 'string',
      default: 'https://www.mundoverde.com.br/',
    },
    image11: {
      title: 'Décima primeira Imagem',
      type: 'string',
      default: 'https://www.mundoverde.com.br/',
    },
    image12: {
      title: 'Décima segunda Imagem',
      type: 'string',
      default: 'https://www.mundoverde.com.br/',
    },
  },
}
