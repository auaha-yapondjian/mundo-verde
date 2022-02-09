import React from 'react'

import './styles.css'

function SobreNosBanner() {
  return (
    <section className="container-banner-sobrenos">
      <div className="first-row">
        <img
          src="https://mundoverde.vtexassets.com/arquivos/banner-sobrenos-mobile2.png"
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
          <h1>Você mais saudável</h1>
          <p>
            A gente pode provar que com saúde tudo é possível e mais gostoso. O
            Mundo Verde é uma marca centrada no bem-estar do todo: pessoas,
            natureza e economia. Afinal, está tudo conectado. Todos os passos
            são dados seguindo o compromisso de mostrar que uma vida saudável,
            prazerosa e com um mundo inteiro de opções para cada estilo existe
            por e pela natureza!
          </p>
        </div>
      </div>
    </section>
  )
}

export default SobreNosBanner
