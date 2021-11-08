import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1212px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 15px;

  border: 1px solid transparent;
  border-radius: 0px 0px 0px 15px;
  border-color: #6ac68d;

  background: #6ac68d;
  line-height: 1.42857143;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #fff;

  strong {
    font-weight: 700;
    font-size: 36px;
    text-align: center;
  }

  p {
    margin: 0;
    font-size: 26px;
    text-align: center;
  }
`
