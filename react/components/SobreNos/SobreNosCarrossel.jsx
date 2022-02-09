import React from 'react'

import { SliderLayout } from 'vtex.slider-layout'

import './styles.css'

function SobreNosCarrossel() {
  return (
    <div className="third-row-sobrenos">
      <div className="third-row-sobrenos-content">
        <h1>Nossa História</h1>
        <SliderLayout
          className="sliderSobrenos"
          itemsPerPage={{
            desktop: 2,
            tablet: 1,
            phone: 1,
          }}
          showPaginationDots="nerver"
        >
          <div className="sobrenos-item-carrossel">
            <h1>1987</h1>
            <p>
              Nasce o Mundo Verde, em Petrópolis, Rio de Janeiro. Criado por
              Isabel Maria Antunes Joffe, seu marido Elísio Joffe e seus irmãos,
              Jorge e Arlindo Antunes. A primeira loja tinha 25m 2 e apenas um
              funcionário.
            </p>
          </div>
          <div className="sobrenos-item-carrossel">
            <h1>1987</h1>
            <p>
              Nasce o Mundo Verde, em Petrópolis, Rio de Janeiro. Criado por
              Isabel Maria Antunes Joffe, seu marido Elísio Joffe e seus irmãos,
              Jorge e Arlindo Antunes. A primeira loja tinha 25m 2 e apenas um
              funcionário.
            </p>
          </div>
          <div className="sobrenos-item-carrossel">
            <h1>1987</h1>
            <p>
              Nasce o Mundo Verde, em Petrópolis, Rio de Janeiro. Criado por
              Isabel Maria Antunes Joffe, seu marido Elísio Joffe e seus irmãos,
              Jorge e Arlindo Antunes. A primeira loja tinha 25m 2 e apenas um
              funcionário.
            </p>
          </div>
          <div className="sobrenos-item-carrossel">
            <h1>1987</h1>
            <p>
              Nasce o Mundo Verde, em Petrópolis, Rio de Janeiro. Criado por
              Isabel Maria Antunes Joffe, seu marido Elísio Joffe e seus irmãos,
              Jorge e Arlindo Antunes. A primeira loja tinha 25m 2 e apenas um
              funcionário.
            </p>
          </div>
        </SliderLayout>
        <p>arraste para o lado saiba Mais</p>
      </div>
    </div>
  )
}

export default SobreNosCarrossel
