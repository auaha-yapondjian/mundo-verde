import styled from "styled-components";

export const CardComponent = styled.div`
  flex: 0 0 260px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 15px;
  box-sizing: border-box;
  border-top-left-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;

  background: white;
  box-shadow: 0 3px 3px 0 gray;
  transition: 0.2s all ease-in-out;

  &:hover {
    box-shadow: 0 5px 5px 0 gray;
    transform: scale(1.02, 1.02);
  }

  > img {
    width: 110px;
  }

  h4,
  p,
  a {
    margin: 0;
    line-height: 120%;
    color: black;
    text-decoration: none;
  }

  P,
  a {
    display: flex;
    align-items: center;
    gap: 5px;

    font-size: 14px;
    font-weight: 500;
  }

  h4 {
    font-size: 16px;
    font-weight: 1000;
  }

  a {
    cursor: pointer;
  }

  svg {
    width: 13px;
    display: flex;
    justify-content: center;
  }
`;

export const CardAddress = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  height: 90px;

  h4 {
    font-weight: 800;
  }
`;

export const CardStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 110px;
  margin-top: 0.85rem;

  a {
    color: #0f834c;
    margin-left: 2px;
  }
`;
