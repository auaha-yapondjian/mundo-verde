import React, { useEffect, useState } from 'react'

import GET_BRANDS from '../../graphql/getBrands.graphql'

import { useQuery } from 'react-apollo'

import './brandsPage.global.css'

function BrandsPage() {
  const { data } = useQuery(GET_BRANDS, { ssr: false })
  const [showBrands, setShowBrands] = useState([])
  const [inputValue, setInputValue] = useState('')
  console.log('DATA: ', data)
  const letters = [
    { title: '0-9', onClick: () => filteredBrandsByLetter('3') },
    { title: 'A', onClick: () => filteredBrandsByLetter('a') },
    { title: 'B', onClick: () => filteredBrandsByLetter('b') },
    { title: 'C', onClick: () => filteredBrandsByLetter('c') },
    { title: 'D', onClick: () => filteredBrandsByLetter('d') },
    { title: 'E', onClick: () => filteredBrandsByLetter('e') },
    { title: 'F', onClick: () => filteredBrandsByLetter('f') },
    { title: 'G', onClick: () => filteredBrandsByLetter('g') },
    { title: 'H', onClick: () => filteredBrandsByLetter('h') },
    { title: 'I', onClick: () => filteredBrandsByLetter('i') },
    { title: 'J', onClick: () => filteredBrandsByLetter('j') },
    { title: 'K', onClick: () => filteredBrandsByLetter('k') },
    { title: 'L', onClick: () => filteredBrandsByLetter('l') },
    { title: 'M', onClick: () => filteredBrandsByLetter('m') },
    { title: 'N', onClick: () => filteredBrandsByLetter('n') },
    { title: 'O', onClick: () => filteredBrandsByLetter('o') },
    { title: 'P', onClick: () => filteredBrandsByLetter('p') },
    { title: 'Q', onClick: () => filteredBrandsByLetter('q') },
    { title: 'R', onClick: () => filteredBrandsByLetter('r') },
    { title: 'S', onClick: () => filteredBrandsByLetter('s') },
    { title: 'T', onClick: () => filteredBrandsByLetter('t') },
    { title: 'U', onClick: () => filteredBrandsByLetter('u') },
    { title: 'V', onClick: () => filteredBrandsByLetter('v') },
    { title: 'W', onClick: () => filteredBrandsByLetter('w') },
    { title: 'X', onClick: () => filteredBrandsByLetter('x') },
    { title: 'Y', onClick: () => filteredBrandsByLetter('y') },
    { title: 'Z', onClick: () => filteredBrandsByLetter('z') },
    { title: '| TUDO', onClick: () => setShowBrands(data?.brands) },
  ]

  function filteredBrands() {
    var filteredBrands = data?.brands?.filter(filteredBrand => {
      return filteredBrand.name.toLowerCase().includes(inputValue.toLowerCase())
    })
    setShowBrands(filteredBrands)
  }

  function filteredBrandsByLetter(letter) {
    const brands = reduceBrands(data.brands)
    var filteredBrands = brands[letter]

    setShowBrands(filteredBrands)
  }

  useEffect(() => {
    setShowBrands(data?.brands)
  }, [data])

  useEffect(() => {
    filteredBrands()
  }, [inputValue])

  function reduceBrands(items) {
    return items?.reduce((acc, item) => {
      let initialbrandLetter = item.name.slice(0, 1).toLowerCase()
      acc[initialbrandLetter] = acc[initialbrandLetter]
        ? [item, ...acc[initialbrandLetter]]
        : [item]
      return acc
    }, {})
  }

  const values = reduceBrands(showBrands)

  useEffect(() => {
    filteredBrands()
  }, [inputValue])

  const keyOfValue = values && Object.keys(values).sort()

  return (
    <div className="brands-body">
      <div className="brands-container">
        <h1>Glossário de Marcas</h1>
        <input
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          type="text"
          label="Que marca você procura?"
        />
        <ul>
          {letters.map(letter => (
            <li key={letter.title} onClick={letter.onClick}>
              {letter.title}
            </li>
          ))}
        </ul>
        {data ? (
          keyOfValue?.map(value => (
            <div>
              <h1>{value}</h1>
              <div>
                {values[value].map(
                  letter =>
                    letter.active && <a href={letter.slug}>{letter.name}</a>
                )}
              </div>
            </div>
          ))
        ) : (
          <h1>Carregando marcas...</h1>
        )}
      </div>
    </div>
  )
}

export default BrandsPage
