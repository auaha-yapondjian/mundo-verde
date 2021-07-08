import styled from "styled-components";

interface IFormGroups {
  validFields?: Object;
}

export const Container = styled.div`
  display: flex;
  line-height: 1.42857143;
  font-size: 14px;
  color: #333;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormGroup = styled.div<IFormGroups>`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin: 0 -15px 8px;

  span {
    margin: 5px 0 10px;
    color: #a94442;
    display: ${({ validFields }) => validFields && "none"};
  }

  p {
    font-weight: 700;
    padding-top: 7px;
    margin-bottom: 4px;
  }

  input {
    appearance: none;
    outline: none;
    box-shadow: none;

    display: block;
    width: 100%;
    height: 34px;
    font-size: 14px;
    line-height: 1.42857143;
    padding: 6px 12px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #e3e4e6;
    border-radius: 4px;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

    &:focus {
      border-color: #66afe6;
      outline: 0;
      box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
        0 0 8px rgb(102 175 233 / 60%);
    }
  }
`;

export const Label = styled.label<IFormGroups>`
  display: block;
  margin-bottom: 4px;
  text-align: left;
  font-weight: 700;
  width: 100%;
  color: ${({ validFields }) => !validFields && "#a94442"};

  @media (min-width: 768px) {
    padding-top: 7px;
    float: left;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  min-height: 1px;

  @media (min-width: 768px) {
    width: 83.33333333%;
    float: left;
  }
`;

export const Input = styled.input<IFormGroups>`
  appearance: none;
  outline: none;
  box-shadow: none;

  display: block;
  width: 100%;
  height: 34px;
  font-size: 14px;
  line-height: 1.42857143;
  padding: 6px 12px;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #e3e4e6;
  border-radius: 4px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

  border-color: ${({ validFields }) => !validFields && "#a94442 !important"};

  &:focus {
    border-color: #66afe6;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`;

export const Select = styled.select<IFormGroups>`
  appearance: none;
  outline: none;
  box-shadow: none;

  display: block;
  width: 100%;
  height: 34px;
  font-size: 14px;
  line-height: 1.42857143;
  padding: 6px 14px;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #e3e4e6;
  border-radius: 4px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 18px) calc(1em + 1px),
    calc(100% - 13px) calc(1em + 1px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;

  border-color: ${({ validFields }) => !validFields && "#a94442 !important"};

  &:focus {
    border-color: #66afe6;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`;

export const ButtonGroup = styled.div`
  margin: 20px 0 80px;
  position: relative;
  min-height: 1px;
  padding-right: 15px;

  @media (min-width: 768px) {
    width: 83.33333333%;
    float: left;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 120px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  background: #008651;
  color: #fff;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid #008651;
  border-radius: 4px;
`;
