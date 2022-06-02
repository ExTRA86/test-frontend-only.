import styled from 'styled-components';

interface IError {
  errorLogin: boolean;
  errorPassword: boolean;
  waiting: boolean;
}

export const FormStyle = styled.div<IError>`
  width: 40%;

  display: inline-table;

  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  label {
    margin-top: 20px;
    font-size: 16px;
    line-height: 19px;
  }

  input {
    margin-top: 10px;
    background: #f5f5f5;
    border-radius: 8px;
    padding: 20px;
    font-size: 16px;
    line-height: 19px;
  }

  input[type='login'] {
    border: ${props => (props.errorLogin ? '1px solid #E26F6F' : '0')};
  }

  input[type='password'] {
    border: ${props => (props.errorPassword ? '1px solid #E26F6F' : '0')};
  }

  input[type='checkbox'] {
    margin-right: 17px;
  }

  button {
    margin-top: 40px;
    padding: 19px;
    background: ${props => (props.waiting ? '#99A9FF' : '#4a67ff')};
    border-radius: 8px;
    font-family: 'Helvetica Neue';
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    border: 0;
  }

  p {
    font-size: 14px;
    line-height: 17px;
    color: #e26f6f;
  }

  span {
    display: inherit;
    background: #f5e9e9;
    border: 1px solid #e26f6f;
    border-radius: 8px;
    padding: 20px;
    font-size: 14x;
    line-height: 17px;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px 14px 0px 0px;
      width: 20px;
      height: 20px;
      background: #ffc8c8;
      border-radius: 50%;
    }
  }
`;
