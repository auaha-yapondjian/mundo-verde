import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1025px) {
    margin: -30px 0px;
  }
`
