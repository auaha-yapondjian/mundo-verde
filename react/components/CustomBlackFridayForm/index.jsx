import React, { useState } from 'react';
import {phoneMask} from "../../utils/phoneMask"
import axios from "axios"

import { FormBlackFriday } from './styles';

function CustomBlackFridayForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [formValues, setFormValues] = useState({});

  const getFormValues = (formElement) => {
    const { name, email, phone } = formElement;

    return {
      name: name.value,
      email: email.value,
      phone: phone.value
    };
  };

  const validadeFormValues = (formValues) => {
    const { name, email, phone } = formValues
    const inputsIsNotEnpty = !!name && !!email && !!phone
    return inputsIsNotEnpty
  }

  const setFormDataOnDataBase = async (formValues) => {    
    return await axios.post("/api/dataentities/BF/documents", { ...formValues }, {
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
    })
      .then((response) => response)
      .catch((error) => error)
  }

  const formSubmitEvent = (event) => {
    event.preventDefault();
    const formElement = event.target;
    const formValues = getFormValues(formElement);    
    setFormValues(formValues);
    const formIsvalid = validadeFormValues(formValues)
    
    const formStatusMessageList = {
      201: "messageSave"
    }

    console.log("Form Values na chamada: ", formValues)
    if (formIsvalid) {
      
      setFormDataOnDataBase(formValues).then(({ status }) => {
        console.log(formStatusMessageList[201])
          // const currentMessage = formStatusMessageList[status] || formStatusMessageList[201]
          // showFormModal(currentMessage)
      })
    } else {
      console.log("InvalidFields")
      // showFormModal("invalidFields")
    }    
  };

  return (
    <>
    <FormBlackFriday onSubmit={formSubmitEvent}>
      <input type="text" placeholder="nome:" name="name" />
      <input type="text" type="email" placeholder="email:" name="email" />
      <input type="text" placeholder="telefone:" name="phone" onChange={phoneMask} />
      <label className="chk" >
        <input
          name="accept"
          id="check1" 
          type="checkbox" 
          onChange={(event) => setIsChecked(event.currentTarget.checked)}
          checked={isChecked}
        />
        <span><p className="p-inside-span">L</p></span>
        <p>ACEITO RECEBER INFORMAÇÕES SOBRE PRODUTOS E OFERTAS PROMOCIONAIS ESPECIAIS DO MUNDO VERDE POR EMAIL</p>
      </label>      
      <button disabled={isChecked ? false : true} type="submit">INSCREVER</button>
    </FormBlackFriday>
    </>
  );
}

export default CustomBlackFridayForm;