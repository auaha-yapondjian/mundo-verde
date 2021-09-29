import React, { useState, useRef } from 'react'

import './styles.css'

interface IAccordion {
  title: string
  content: string
}

const Accordion: React.FC<IAccordion> = props => {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordionIcon')

  const content = useRef(null)

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordionIcon' : 'accordionIcon minus'
    )
  }

  return (
    <div className="accordionSection">
      <button
        className={`accordionButton ${setActive}`}
        onClick={toggleAccordion}
      >
        <p className={`${setRotate}`}></p>
        <p className="accordionTitle">{props.title}</p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordionContent"
      >
        <div
          className="accordionText"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  )
}

export default Accordion
