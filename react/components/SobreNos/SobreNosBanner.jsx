import React from 'react'

import { index as RichText } from 'vtex.rich-text'

import './styles.css'

function SobreNosBanner({
  textBanner,
  imageBanner,
  titleSecondBanner,
  textSecondBanner,
}) {
  return (
    <section className="container-banner-sobrenos">
      <div className="first-row">
        {/* <p>
          Este é o<br />
          <strong>
            nosso
            <br />
          </strong>
          mundo
        </p> */}
        <RichText text={textBanner} />
        <img
          src={imageBanner}
          alt="Banner Sobre Nos"
          className="imagem-banner-first-sobrenos"
        />
        <img
          src="https://mundoverde.vtexassets.com/arquivos/mel-banner-sobrenos.png"
          alt="Mel"
          className="imagem-absolute-first-banner"
        />
      </div>
      <div className="second-row">
        <div>
          <h1>{titleSecondBanner}</h1>
          <p>{textSecondBanner}</p>
        </div>
      </div>
    </section>
  )
}

export default SobreNosBanner
