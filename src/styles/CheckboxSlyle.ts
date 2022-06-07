import styled from 'styled-components';

interface IProps {
  toggleCheckbox: boolean;
}

export const CheckboxStyle = styled.div<IProps>`
  margin-top: 20px;
  display: flex;
  align-items: center;
  max-width: 200px;
  cursor: pointer;

  div {
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: ${props => (props.toggleCheckbox ? 'block' : 'none')};
      width: 14px;
      height: 14px;
      border-radius: 2px;
      background-color: #4a67ff;
      border: 0;
    }
  }

  label {
    margin: 0px 0px 0px 14px !important;
  }
`;
