import styled from 'styled-components'

export const FormBlackFriday = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  /* > div {
      display: flex;
      justify-content: flex-start;
      margin: 20px 0; */

  /* label {
        color: #f1ffff;
        font-size: 12px;
      } */

  .chk {
    display: flex;
    align-items: center;
    margin: 8px 0;
  }

  .chk input {
    display: none;
  }

  .chk p {
    font-size: 12px;
    color: #fff;
    margin: 0 8px;
  }

  .chk span {
    width: 22px !important;
    height: 12px;
    display: block;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-radius: 4px;
  }

  .p-inside-span {
    display: none;
  }

  .chk input:checked + span {
    /* font-family: arial; */

    > .p-inside-span {
      display: block;
      font-family: arial;
      -ms-transform: scaleX(-1) rotate(-35deg); /* IE 9 */
      -webkit-transform: scaleX(-1) rotate(-35deg); /* Chrome, Safari, Opera */
      transform: scaleX(-1) rotate(-35deg);
    }
  }

  > input {
    color: #f1ffff;
    font-size: 22px;
    text-align: left;
    background: transparent;
    border: none;
    border-bottom: 1px solid #ffffff;
    border-radius: 0;
    padding-top: 20px;
    margin-bottom: 10px;
    width: 100%;

    ::placeholder {
      font-size: 20px;
      font-style: italic;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: #ddd;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
    font-size: 20px;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  button {
    text-transform: uppercase;
    font-size: 28px;
    float: right;
    width: 100%;
    margin-top: 8px;
    padding: 2px 0;
    color: #018a54;
    font-weight: 800;
    text-transform: capitalize;
    background: #fff;
    border: 0;
    border-radius: 18px;
    outline: none;
    transition: all 0.3s ease;
    cursor: pointer;

    :hover {
      background-color: #cecece;
    }
  }

  button:disabled {
    opacity: 0.2;
  }
`

export const LoadingBlackFriday = styled.div`
  color: #fff;
`
