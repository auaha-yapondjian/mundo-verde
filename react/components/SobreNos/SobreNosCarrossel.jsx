import React, { useEffect, useState } from 'react'

import { SliderLayout } from 'vtex.slider-layout'

import './styles.css'

function SobreNosCarrossel() {
  const [rightButtonIsHidden, setRightButtonIsHidden] = useState(false)
  const [leftButtonIsHidden, setLeftButtonIsHidden] = useState(true)

  useEffect(() => {
    const arrowButton = document.querySelectorAll(
      '.mundoverde-store-theme-3-x-sliderArrows'
    )

    const leftButton = document.querySelector(
      '.mundoverde-store-theme-3-x-sliderLeftArrow'
    )

    const rightButton = document.querySelector(
      '.mundoverde-store-theme-3-x-sliderRightArrow'
    )

    arrowButton.forEach(item =>
      item.addEventListener('click', () => {
        console.log('CLICK: ', leftButtonIsHidden)
        setTimeout(() => {
          setRightButtonIsHidden(rightButton.disabled)
          setLeftButtonIsHidden(leftButton.disabled)
        }, 300)
      })
    )
  }, [])

  console.log('STATE RIGHT: ', rightButtonIsHidden)
  console.log('STATE LEFT: ', leftButtonIsHidden)

  return (
    <div className="third-row-sobrenos">
      <div
        className={
          leftButtonIsHidden ? 'left-is-hidden' : 'left-shadow-sobrenos'
        }
      ></div>
      <div className="third-row-sobrenos-content">
        <h1>Nossa História</h1>
        <SliderLayout
          className="sliderSobrenos"
          itemsPerPage={{
            desktop: 2,
            tablet: 1,
            phone: 1,
          }}
          showPaginationDots="never"
          navigationStep={1}
        >
          <div className="sobrenos-item-carrossel">
            <h1>1987</h1>
            <p>
              Nasce o Mundo Verde, em Petrópolis, Rio de Janeiro. Criado por
              Isabel Maria Antunes Joffe, seu marido Elísio Joffe e seus irmãos,
              Jorge e Arlindo Antunes. A primeira loja tinha 25m 2 e apenas um
              funcionário.
            </p>
            <div class="traco-right">
              <svg
                width="52"
                height="45"
                viewBox="0 0 52 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52 3C41.2304 3 32.5 11.7304 32.5 22.5C32.5 33.2696 41.2304 42 52 42"
                  stroke="#696969"
                  stroke-width="6"
                />
                <rect
                  x="35.5"
                  y="25"
                  width="35"
                  height="6"
                  transform="rotate(180 35.5 25)"
                  fill="#696969"
                />
              </svg>
            </div>
          </div>
          <div className="sobrenos-item-carrossel">
            <div className="traco-left">
              <svg
                width="52"
                height="45"
                viewBox="0 0 52 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 42C11.2696 42 20 33.2696 20 22.5C20 11.7304 11.2696 3 0.5 3"
                  stroke="#696969"
                  stroke-width="6"
                />
                <rect x="17" y="20" width="35" height="6" fill="#696969" />
              </svg>
            </div>
            <h1>1987</h1>
            <p>
              Nasce o Mundo Verde, em Petrópolis, Rio de Janeiro. Criado por
              Isabel Maria Antunes Joffe, seu marido Elísio Joffe e seus irmãos,
              Jorge e Arlindo Antunes. A primeira loja tinha 25m 2 e apenas um
              funcionário.
            </p>
            <div class="traco-right">
              <svg
                width="52"
                height="45"
                viewBox="0 0 52 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52 3C41.2304 3 32.5 11.7304 32.5 22.5C32.5 33.2696 41.2304 42 52 42"
                  stroke="#696969"
                  stroke-width="6"
                />
                <rect
                  x="35.5"
                  y="25"
                  width="35"
                  height="6"
                  transform="rotate(180 35.5 25)"
                  fill="#696969"
                />
              </svg>
            </div>
          </div>
          <div className="sobrenos-item-carrossel">
            <div className="traco-left">
              <svg
                width="52"
                height="45"
                viewBox="0 0 52 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 42C11.2696 42 20 33.2696 20 22.5C20 11.7304 11.2696 3 0.5 3"
                  stroke="#696969"
                  stroke-width="6"
                />
                <rect x="17" y="20" width="35" height="6" fill="#696969" />
              </svg>
            </div>
            <h1>1987</h1>
            <p>
              Nasce o Mundo Verde, em Petrópolis, Rio de Janeiro. Criado por
              Isabel Maria Antunes Joffe, seu marido Elísio Joffe e seus irmãos,
              Jorge e Arlindo Antunes. A primeira loja tinha 25m 2 e apenas um
              funcionário.
            </p>
            <div class="traco-right">
              <svg
                width="52"
                height="45"
                viewBox="0 0 52 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52 3C41.2304 3 32.5 11.7304 32.5 22.5C32.5 33.2696 41.2304 42 52 42"
                  stroke="#696969"
                  stroke-width="6"
                />
                <rect
                  x="35.5"
                  y="25"
                  width="35"
                  height="6"
                  transform="rotate(180 35.5 25)"
                  fill="#696969"
                />
              </svg>
            </div>
          </div>
          <div className="sobrenos-item-carrossel">
            <div className="traco-left">
              <svg
                width="52"
                height="45"
                viewBox="0 0 52 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 42C11.2696 42 20 33.2696 20 22.5C20 11.7304 11.2696 3 0.5 3"
                  stroke="#696969"
                  stroke-width="6"
                />
                <rect x="17" y="20" width="35" height="6" fill="#696969" />
              </svg>
            </div>
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
      <div
        className={
          rightButtonIsHidden
            ? 'right-shadow-sobrenos right-is-hidden'
            : 'right-shadow-sobrenos'
        }
      ></div>
    </div>
  )
}

export default SobreNosCarrossel
