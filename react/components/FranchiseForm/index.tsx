import React, { FormEvent, useState, InputHTMLAttributes } from 'react'
import axios from 'axios'
// utils FranchiseForm
import { capitalRangesOptions, stateOptions } from './utils'
// components FranchiseForm
import SendSuccessMessage from './components/SendSuccessMessage'

import {
  Container,
  Form,
  FormGroup,
  Label,
  InputDiv,
  Input,
  Select,
  ButtonGroup,
  Button,
} from './styles'
import { NoSSR } from 'vtex.render-runtime'

interface IFormTarget extends EventTarget {
  name: InputHTMLAttributes<HTMLElement>
  email: InputHTMLAttributes<HTMLElement>
  phone: InputHTMLAttributes<HTMLElement>
  capital: InputHTMLAttributes<HTMLElement>
  state: InputHTMLAttributes<HTMLElement>
  message: InputHTMLAttributes<HTMLElement>
}

interface IRequiredFields {
  name: boolean
  email: boolean
  phone: boolean
  capital: boolean
  state: boolean
  message?: boolean
}

const FranchiseForm: React.FC = () => {
  const [sent, setSent] = useState<boolean>(false)
  const [validFields, setValidFields] = useState<IRequiredFields>({
    name: true,
    email: true,
    phone: true,
    capital: true,
    state: true,
  })

  const requiredInputMessage = 'Este campo é requerido.'

  const sendForm = async (event: FormEvent) => {
    event.preventDefault()

    const {
      name,
      email,
      phone,
      capital,
      state,
      message,
    } = event.target as IFormTarget

    const data: Record<string, any> = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      capital: capital.value,
      state: state.value,
      message: message.value,
    }
    const fieldKeysList = Object.keys(data)

    const validatedData = fieldKeysList.reduce(
      (validatedData: any, currentField: string) => {
        const currentFieldIsNotEmpty =
          data[currentField] !== '' && data[currentField] !== '* Selecione *'
        validatedData[currentField] = currentFieldIsNotEmpty

        validatedData.message = true
        return validatedData
      },
      {} as IRequiredFields
    )

    const haveInvalidField = Object.values(validatedData).includes(false)
    setValidFields(validatedData)

    if (haveInvalidField) {
      return
    }

    const dataToSend = {
      nome: data.name,
      telefone: data.phone,
      email: data.email,
      capital: data.capital,
      estado: data.state,
      mensagem: data.message,
    }

    await axios.post('/api/dataentities/FR/documents/', dataToSend, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    await axios.post(
      'https://teste.solutto.com.br/webhook-investidores.aspx?chave=876678-13728282-181812',
      dataToSend,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )

    setSent(true)
  }

  if (sent) {
    return <SendSuccessMessage />
  } else {
    return (
      <NoSSR
        onSSR={
          <div style={{ fontSize: 26, color: '#fff', margin: '0 auto' }}>
            Carregando...
          </div>
        }
      >
        <Container>
          <Form onSubmit={sendForm}>
            <h1>Seja um Franqueado</h1>
            <FormGroup validFields={validFields.name}>
              <Label htmlFor="Nome" validFields={validFields.name}>
                Nome Completo
              </Label>
              <InputDiv>
                <Input
                  placeholder="Nome"
                  type="text"
                  name="name"
                  validFields={validFields.name}
                />
              </InputDiv>
              <span>{requiredInputMessage}</span>
            </FormGroup>

            <FormGroup validFields={validFields.email}>
              <Label htmlFor="Email" validFields={validFields.email}>
                E-mail
              </Label>
              <InputDiv>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  validFields={validFields.email}
                />
              </InputDiv>
              <span>{requiredInputMessage}</span>
            </FormGroup>

            <FormGroup validFields={validFields.phone}>
              <Label htmlFor="Telefone" validFields={validFields.phone}>
                Telefone
              </Label>
              <InputDiv>
                <Input
                  placeholder="Telefone"
                  type="text"
                  name="phone"
                  validFields={validFields.phone}
                />
              </InputDiv>
              <span>{requiredInputMessage}</span>
            </FormGroup>

            <FormGroup validFields={validFields.capital}>
              <Label htmlFor="Faixas_Capital" validFields={validFields.capital}>
                Faixas de Capital
              </Label>
              <InputDiv>
                <Select name="capital" validFields={validFields.capital}>
                  {capitalRangesOptions.map(({ value, text }, index) => (
                    <option key={index} value={value}>
                      {text}
                    </option>
                  ))}
                </Select>
              </InputDiv>
              <span>{requiredInputMessage}</span>
            </FormGroup>

            <FormGroup validFields={validFields.state}>
              <Label htmlFor="Estado" validFields={validFields.state}>
                Estado
              </Label>
              <InputDiv>
                <Select name="state" validFields={validFields.state}>
                  {stateOptions.map(({ value, text }, index) => (
                    <option key={index} value={value}>
                      {text}
                    </option>
                  ))}
                </Select>
              </InputDiv>
              <span>{requiredInputMessage}</span>
            </FormGroup>

            <FormGroup>
              <InputDiv>
                <input placeholder="Observações" type="text" name="message" />
              </InputDiv>
            </FormGroup>

            <ButtonGroup>
              <Button type="submit">CADASTRAR-SE</Button>
            </ButtonGroup>
          </Form>
        </Container>
      </NoSSR>
    )
  }
}

export default FranchiseForm
