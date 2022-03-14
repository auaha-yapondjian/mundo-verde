import React, { useEffect, useState } from 'react'

import GET_BRANDS from '../../graphql/getBrands.graphql'

import { useQuery } from 'react-apollo'

import './brandsPage.global.css'

function BrandsPage() {
  const { data } = useQuery(GET_BRANDS, { ssr: false })
  const [values, setValues] = useState({})

  const letters = [
    { title: '0-9', onClick: () => {} },
    { title: 'A', onClick: () => {} },
    { title: 'B', onClick: () => {} },
    { title: 'C', onClick: () => {} },
    { title: 'D', onClick: () => {} },
    { title: 'E', onClick: () => {} },
    { title: 'F', onClick: () => {} },
    { title: 'G', onClick: () => {} },
    { title: 'H', onClick: () => {} },
    { title: 'I', onClick: () => {} },
    { title: 'J', onClick: () => {} },
    { title: 'K', onClick: () => {} },
    { title: 'L', onClick: () => {} },
    { title: 'M', onClick: () => {} },
    { title: 'N', onClick: () => {} },
    { title: 'O', onClick: () => {} },
    { title: 'P', onClick: () => {} },
    { title: 'Q', onClick: () => {} },
    { title: 'R', onClick: () => {} },
    { title: 'S', onClick: () => {} },
    { title: 'T', onClick: () => {} },
    { title: 'U', onClick: () => {} },
    { title: 'V', onClick: () => {} },
    { title: 'W', onClick: () => {} },
    { title: 'X', onClick: () => {} },
    { title: 'Y', onClick: () => {} },
    { title: 'Z', onClick: () => {} },
    { title: '| TUDO', onClick: () => {} },
  ]

  console.log('DATA: ', data)

  function populateValue() {
    const filteredValues = data?.brands?.reduce((acc, item) => {
      let initialbrandLetter = item.name.slice(0, 1).toLowerCase()
      acc[initialbrandLetter] = acc[initialbrandLetter]
        ? [item, ...acc[initialbrandLetter]]
        : [item]
      return acc
    }, {})
    setValues(filteredValues)
  }

  const keyOfValue = values && Object.keys(values).sort()

  useEffect(() => {
    populateValue()
  }, [data])

  // console.log('VALUES: ', keyOfValue)

  // function getSearch(text) {
  //   const newValues = []
  //   keyOfValue.map(key => {
  //     newValues = values.map(value => {
  //       if (value)
  //       console.log(value)
  //       return value
  //     })
  //   })

  //   setValues(newValues)
  // }

  return (
    <div className="brands-body">
      <div className="brands-container">
        <h1>Glossário de Marcas</h1>
        <input
          onChange={event => getSearch(event.target.value)}
          type="text"
          label="Que marca você procura?"
        />
        <ul>
          {letters.map(letter => (
            <li>{letter.title}</li>
          ))}
        </ul>
        {data ? (
          keyOfValue?.map(value => (
            <div>
              <h1>{value}</h1>
              <div>
                {values[value].map(letter => (
                  <a href={letter.slug}>{letter.name}</a>
                ))}
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
