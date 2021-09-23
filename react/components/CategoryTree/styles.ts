import styled from 'styled-components'

export const Container = styled.div`
  ul {
    padding-left: 0;

    li {
      list-style: none;

      & + li {
        margin: 4px 0;
      }

      a {
        text-decoration: none;
        color: #008651;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`
