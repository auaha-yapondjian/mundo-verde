import React, { useState, InputHTMLAttributes, FormEvent } from 'react'
import { phoneMask } from '../../utils/phoneMask'
import axios from 'axios'
import { NoSSR } from 'vtex.render-runtime'

import { FormModal } from './FormModal'

import { FormBlackFriday } from './styles'

interface IFormTarget extends EventTarget {
  name: InputHTMLAttributes<HTMLElement>
  email: InputHTMLAttributes<HTMLElement>
  phone: InputHTMLAttributes<HTMLElement>
  accept: InputHTMLAttributes<HTMLElement>
}

interface IformValues {
  name: string | number | readonly string[]
  email: string | number | readonly string[]
  phone: string | number | readonly string[]
  accept: boolean
}

function CustomBlackFridayForm() {
  const [isChecked, setIsChecked] = useState(true)
  const [formValues, setFormValues] = useState({})
  const [modalIsShow, setModalIsShow] = useState(false)
  const [currentModalMessageType, setCurrentModalMessageType] =
    useState('invalidFields')

  const showFormModal = (messageType: string) => {
    setCurrentModalMessageType(messageType)
    setModalIsShow(true)
  }

  const getFormValues = (formElement: any) => {
    const { name, email, phone, accept } = formElement

    return {
      name: name.value,
      email: email.value,
      phone: phone.value,
      accept: accept.checked,
    }
  }

  const validadeFormValues = (formValues: IformValues) => {
    const { name, email, phone, accept } = formValues
    const inputsIsNotEnpty = !!name && !!email && !!phone && accept
    return inputsIsNotEnpty
  }

  const setFormDataOnDataBase = async (formValues: IformValues) => {
    return await axios
      .post(
        '/api/dataentities/BF/documents',
        { ...formValues },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      )
      .then(response => response)
      .catch(error => error)
  }

  const formSubmitEvent = (event: any) => {
    event.preventDefault()
    const formElement = event.target
    const formValues = getFormValues(formElement)
    setFormValues(formValues)
    const formIsvalid = validadeFormValues(formValues)

    const formStatusMessageList: Record<string, any> = {
      201: 'messageSave',
    }

    console.log('Form Values na chamada: ', formValues)
    if (formIsvalid) {
      setFormDataOnDataBase(formValues).then(({ status }) => {
        console.log(formStatusMessageList[201])
        const currentMessage =
          formStatusMessageList[status] || formStatusMessageList[201]
        showFormModal(currentMessage)
      })
    } else {
      console.log('InvalidFields')
      showFormModal('invalidFields')
    }
  }

  return (
    <NoSSR onSSR={<div style={{ color: '#fff' }}>Carregando...</div>}>
      <FormBlackFriday className="form-container-bf" onSubmit={formSubmitEvent}>
        <input type="text" placeholder="nome:" name="name" />
        <input type="email" placeholder="email:" name="email" />
        <input
          type="text"
          placeholder="telefone:"
          name="phone"
          onChange={phoneMask}
        />
        <label className="chk">
          <input
            name="accept"
            type="checkbox"
            onChange={event => setIsChecked(event.currentTarget.checked)}
            checked={isChecked}
          />
          <span>
            <p className="p-inside-span">L</p>
          </span>
          <p>
            ACEITO RECEBER INFORMAÇÕES SOBRE PRODUTOS E OFERTAS PROMOCIONAIS
            ESPECIAIS DO MUNDO VERDE POR EMAIL
          </p>
        </label>
        <button type="submit">INSCREVER</button>
        <FormModal
          modalState={[modalIsShow, setModalIsShow]}
          currentModalMessageType={currentModalMessageType}
        />
      </FormBlackFriday>
    </NoSSR>
  )
}

export default CustomBlackFridayForm
