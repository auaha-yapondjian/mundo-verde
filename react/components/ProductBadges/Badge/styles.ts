import styled from 'styled-components'

interface ITypeBadge {
  type: string
}

export const Link = styled.a`
  text-decoration: none;
`

export const Container = styled.div<ITypeBadge>`
  background-color: #fff;
  border: ${({ type }) =>
    type === 'Vencimento Próximo' ? '1px solid #f60' : '1px solid #008651'};
  color: ${({ type }) => (type === 'Vencimento Próximo' ? '#f60' : '#008651')};
  border-radius: 4px;
  padding: 0;
  margin: 0.25rem 0;
  white-space: nowrap;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${({ type }) =>
      type === 'Vencimento Próximo' ? '#f60' : '#008651'};
    color: #fff !important;
  }

  p {
    font-size: 12px;
    text-transform: uppercase;
    text-align: left;
    margin: 5px;
  }
`
