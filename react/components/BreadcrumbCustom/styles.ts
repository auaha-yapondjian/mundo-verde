import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 1250px;
  padding: 10px 19px;
  margin-top: 1.5px;
  font-size: 13px;

  a {
    text-decoration: none;
    color: #008651;
  }

  span {
    margin-left: 0.5rem;
    padding-bottom: 0.1rem;

    & + span {
      margin-left: 0.2rem;
    }

    p {
      display: flex;
      color: #979899;
      text-transform: capitalize;
      padding-right: 0.25rem;
      transition: color 0.15s ease-in;

      &:hover {
        color: #008651;
      }

      &::before {
        content: '>';
        padding-right: 0.25rem;
        color: #979899;
      }
    }
  }
`
