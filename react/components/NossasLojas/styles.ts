import Select from "react-select";
import styled from "styled-components";

export const StyledSelect = styled(Select)`
  flex: 0 1 350px;

  .Select__control {
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    font-family: lato, sans-serif;
    text-align: center;
    background: #0f834c;
    border-radius: 13px 0 13px 0;
    border: none;
    box-sizing: border-box;
    box-shadow: 0 1px 5px 0px rgb(0 0 0 / 30%);
    outline: none;
    transition: all ease 0.1s;
    cursor: pointer;
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px transparent;
    outline: none;
  }

  .Select__placeholder,
  .Select__single-value {
    color: #fff;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__indicator {
    color: #fff !important;
  }

  .Select__indicator:hover {
    color: #fff !important;
  }
`;

export const ContainerSelects = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ShopContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, clamp(200px, 100%, 260px));
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  padding: 50px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, clamp(200px, 100%, 260px));
  }

  @media (max-width: 930px) {
    grid-template-columns: repeat(2, clamp(200px, 100%, 260px));
  }

  @media (max-width: 675px) {
    grid-template-columns: repeat(1, clamp(200px, 100%, 260px));
  } ;
`;

export const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
