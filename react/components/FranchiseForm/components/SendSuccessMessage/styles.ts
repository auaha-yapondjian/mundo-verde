import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1212px;
  width: 95vw;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 15px;

  border: 1px solid transparent;
  border-radius: 4px;
  border-color: #b2dba1;

  background-image: linear-gradient(to bottom, #dff0d8 0%, #c8e5bc 100%);
  font-size: 14px;
  line-height: 1.42857143;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #3c763d;

  strong {
    font-weight: 700;
  }

  p {
    margin: 0;
  }
`;
