import styled from 'styled-components';

export const ProfileStyle = styled.div`
  display: flex;
  justify-content: center;

  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  p {
    font-size: 40px;
    line-height: 48px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    width: 200px;
    height: 60px;
    background: #f5f5f5;
    border-radius: 8px;
    border: 0;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
  }
`;
