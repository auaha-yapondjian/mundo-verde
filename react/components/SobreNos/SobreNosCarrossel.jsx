import React, { useEffect, useState } from 'react'

import { SliderLayout } from 'vtex.slider-layout'

import './styles.css'

function SobreNosCarrossel({
  titleOfCarroussel,
  carrosselItemTitle1,
  carrosselItemText1,
  carrosselItemTitle2,
  carrosselItemText2,
  carrosselItemTitle3,
  carrosselItemText3,
  carrosselItemTitle4,
  carrosselItemText4,
}) {
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
          leftButtonIsHidden
            ? 'left-shadow-sobrenos left-is-hidden'
            : 'left-shadow-sobrenos'
        }
      ></div>
      <div className="third-row-sobrenos-content">
        <h1>{titleOfCarroussel}</h1>
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
            <p>Nasce o Mundo Verde, em Petrópolis, Rio de Janeiro.</p>
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
            <h1>1993</h1>
            <p>Nasce a primeira franquia em Nova Friburgo - RJ.</p>
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
            <h1>1994</h1>
            <p>
              A expansão da rede continua e é inaugurada a primeira loja na
              cidade do Rio de Janeiro, na Ilha do Governador.
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
            <h1>2007</h1>
            <p>
              Ao completar 20 anos de operação, a rede chega ao número de 100
              lojas no Brasil.
            </p>
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
            <h1>2009</h1>
            <p>O Mundo Verde abre seu capital para o fundo de investimentos.</p>
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
            <h1>2011</h1>
            <p>
              Foram mais de 30 lojas inauguradas, além da entrada em novos
              mercados.
            </p>
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
            <h1>2012</h1>
            <p>
              Inauguração de 40 lojas. Primeira campanha na TV aberta da marca.
            </p>
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
            <h1>2013</h1>
            <p>
              Lançamento oficial da marca própria Mundo Verde Seleção, com
              produtos voltados para um dia a dia mais saudável.
            </p>
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
            <h1>2014</h1>
            <p>Grupo Sforza Holding adquire a empresa</p>
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
            <h1>2015</h1>
            <p>
              Premiada com o Selo de Excelência em Franchising 2015, concedido
              pela Associação Brasileira de Franquias (ABF).
            </p>
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
            <h1>2017</h1>
            <p>
              Lançamento da marca própria Elixir, desenvolvida para cuidar da
              beleza e saúde das mulheres acima dos 30 anos.
            </p>
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
            <h1>2018</h1>
            <p>Mundo Verde ganha o prêmio Top Of Wellness, pelo Grupo Abril</p>
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
            <h1>2019</h1>
            <p>Mais de 200 itens de marca própria.</p>
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
